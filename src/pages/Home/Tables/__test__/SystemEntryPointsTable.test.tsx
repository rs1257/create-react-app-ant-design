import { QueryClientProvider } from '@tanstack/react-query';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { client } from '../../../../mockQueryClient';
import { server } from '../../../../mocks/server';
import { setupFailedNetworkRequest } from '../../../../mocks/testHandlers';
import SystemEntryPointsTable from '../SystemEntryPointsTable';

describe('should correctly render table component', () => {
  it('should display System Entry Points table component when rendered', async () => {
    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <SystemEntryPointsTable />
      </QueryClientProvider>
    );

    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(container.querySelector('.ant-spin-text')).then(() => {
      expect(queryByText('Last Updated:', { exact: false })).toBeInTheDocument();
    });
  });

  it('should display System Entry Points table component error message when rendered', async () => {
    const statusCode = 404;
    server.use(
      setupFailedNetworkRequest(
        `${process.env.REACT_APP_API || ''}/api/LatestSupplyEntryPoint`,
        statusCode
      )
    );

    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <SystemEntryPointsTable />
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
