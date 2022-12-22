import { QueryClientProvider } from '@tanstack/react-query';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { client } from '../../../../mockQueryClient';
import { server } from '../../../../mocks/server';
import { setupFailedNetworkRequest } from '../../../../mocks/testHandlers';
import ForecastSupplyDemandGraph from '../ForecastSupplyDemandGraph';

describe('Forecast Supply Demand Graph component', () => {
  it('should display Forecast Supply Demand Graph component when rendered', async () => {
    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <ForecastSupplyDemandGraph />
      </QueryClientProvider>
    );

    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(container.querySelector('.ant-spin-text')).then(() => {
      expect(queryByText('Forecast Supply and Demand')).toBeInTheDocument();
    });
  });

  it('should display Forecast Supply Demand Graph component error message when rendered', async () => {
    const statusCode = 404;
    server.use(
      setupFailedNetworkRequest(
        `${process.env.REACT_APP_API || ''}/api/WithinDayForecastSupplyAndDemand`,
        statusCode
      )
    );

    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <ForecastSupplyDemandGraph />
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
