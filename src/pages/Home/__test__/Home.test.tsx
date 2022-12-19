import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import Home from '..';

const client = new QueryClient();

describe('Home component', () => {
  it('should display Home component when rendered', () => {
    const { queryByText } = render(
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    );

    expect(queryByText('Home')).toBeInTheDocument();
  });
});
