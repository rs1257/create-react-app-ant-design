import { QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { client } from '../../../../mockQueryClient';
import { server } from '../../../../mocks/server';
import { setupFailedNetworkPostRequest } from '../../../../mocks/testHandlers';
import DataItemExplorerTable from '../DataItemExplorerTable';

describe('should correctly render table component', () => {
  it('should display Data Item Explorer table component when rendered', async () => {
    const { queryByText, container } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorerTable />
      </QueryClientProvider>
    );

    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(container.querySelector('.ant-spin-text')).then(() => {
      expect(queryByText('Data Item Explorer')).toBeInTheDocument();
    });
  });

  it('should display Forecast Margins table component error message when rendered', async () => {
    const statusCode = 404;
    const mipPullApiUrl = process.env.REACT_APP_MIP_PULL_API_URL || '';
    server.use(
      setupFailedNetworkPostRequest(
        `${mipPullApiUrl}/MIPIws-public/public/publicwebservice.asmx`,
        statusCode
      )
    );

    const { findByText } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorerTable />
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
