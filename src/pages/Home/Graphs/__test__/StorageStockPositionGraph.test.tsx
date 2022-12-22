import { QueryClientProvider } from '@tanstack/react-query';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { client } from '../../../../mockQueryClient';
import { server } from '../../../../mocks/server';
import { setupFailedNetworkRequest } from '../../../../mocks/testHandlers';
import StorageStockPositionGraph from '../StorageStockPositionGraph';

describe('Storage Stock Position Graph component', () => {
  it('should display Storage Stock Position Graph component when rendered', async () => {
    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <StorageStockPositionGraph />
      </QueryClientProvider>
    );

    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(container.querySelector('.ant-spin-text')).then(() => {
      expect(queryByText('Storage Stock Position')).toBeInTheDocument();
    });
  });

  it('should display Storage Stock Position Graph component error message when rendered', async () => {
    const statusCode = 404;
    server.use(
      setupFailedNetworkRequest(
        `${process.env.REACT_APP_API || ''}/api/AnnualStorageStockLevel`,
        statusCode
      )
    );

    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <StorageStockPositionGraph />
      </QueryClientProvider>
    );

    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(container.querySelector('.ant-spin-text')).then(() => {
      expect(
        queryByText(`An error has occurred: Request failed with status code ${statusCode}`)
      ).toBeInTheDocument();
    });
  });
});
