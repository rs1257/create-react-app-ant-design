import { QueryClientProvider } from '@tanstack/react-query';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { client } from '../../../../mockQueryClient';
import { server } from '../../../../mocks/server';
import { setupFailedNetworkRequest } from '../../../../mocks/testHandlers';
import WithinDayPclpGraph from '../WithinDayPclpGraph';

describe('Within Day Pclp Graph component', () => {
  it('should display Within Day Pclp Graph component when rendered', async () => {
    const { queryByText, queryAllByText, container } = render(
      <QueryClientProvider client={client}>
        <WithinDayPclpGraph />
      </QueryClientProvider>
    );

    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(container.querySelector('.ant-spin-text')).then(() => {
      expect(queryAllByText('Within Day PCLP').length).toBeGreaterThanOrEqual(1);
    });
  });

  it('should display Within Day Pclp Graph component error message when rendered', async () => {
    const statusCode = 404;
    server.use(
      setupFailedNetworkRequest(
        'https://mip-prd-web.azurewebsites.net/api/WithinDayPclp',
        statusCode
      )
    );

    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <WithinDayPclpGraph />
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
