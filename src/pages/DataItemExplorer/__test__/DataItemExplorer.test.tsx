import { render } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '../../../mockQueryClient';
import DataItemExplorer from '..';

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
