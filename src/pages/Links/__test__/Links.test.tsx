import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Links from '..';

const client = new QueryClient();

describe('Links component', () => {
  it('should display Links component when rendered', () => {
    const { queryByText } = render(
      <QueryClientProvider client={client}>
        <Links />
      </QueryClientProvider>
    );

    expect(queryByText('Links')).toBeInTheDocument();
  });
});
