import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import DataItemExplorer from '..';

const client = new QueryClient();

describe('DataItemExplorer component', () => {
  it('should display DataItemExplorer component when rendered', () => {
    const { queryByText } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorer />
      </QueryClientProvider>
    );

    expect(queryByText('Data Item Explorer')).toBeInTheDocument();
  });
});
