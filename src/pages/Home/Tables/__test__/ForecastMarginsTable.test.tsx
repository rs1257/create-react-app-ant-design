import { QueryClientProvider } from '@tanstack/react-query';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { client } from '../../../../mockQueryClient';
import { server } from '../../../../mocks/server';
import { setupFailedNetworkRequest } from '../../../../mocks/testHandlers';
import ForecastMarginsTable from '../ForecastMarginsTable';

describe('should correctly render table component', () => {
  it('should display Forecast Margins table component when rendered', async () => {
    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <ForecastMarginsTable />
      </QueryClientProvider>
    );

    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(container.querySelector('.ant-spin-text')).then(() => {
      expect(queryByText('Forecast Margins')).toBeInTheDocument();
    });
  });

  it('should display Forecast Margins table component error message when rendered', async () => {
    const statusCode = 404;
    server.use(
      setupFailedNetworkRequest(
        `${process.env.REACT_APP_API || ''}/api/StatusHeader?currentUtcDateTimeOverride`,
        statusCode
      )
    );

    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <ForecastMarginsTable />
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
