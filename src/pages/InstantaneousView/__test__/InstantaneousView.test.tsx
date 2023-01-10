import { QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { client } from '../../../mockQueryClient';
import InstantaneousView from '..';
import { server } from '../../../mocks/server';
import { setupFailedNetworkRequest } from '../../../mocks/testHandlers';

describe('Instantaneous View component', () => {
  it('should display Instantaneous View component when rendered', async () => {
    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <InstantaneousView />
      </QueryClientProvider>
    );

    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(container.querySelector('.ant-spin-text')).then(() => {
      expect(queryByText('Instantaneous View')).toBeInTheDocument();
    });
  });

  it('should display Instantaneous View component error message when rendered', async () => {
    const statusCode = 404;
    const mipPullApiUrl = process.env.REACT_APP_MIP_PULL_API_URL || '';
    server.use(
      setupFailedNetworkRequest(
        `${mipPullApiUrl}/EDP-PublicUI/PublicPI/InstantaneousFlowWebService.asmx`,
        statusCode,
        'POST'
      )
    );

    const { findByText } = render(
      <QueryClientProvider client={client}>
        <InstantaneousView />
      </QueryClientProvider>
    );

    const errorMessage = await findByText(
      `An error has occurred: Request failed with status code ${statusCode}`
    );

    await waitFor(() => {
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
