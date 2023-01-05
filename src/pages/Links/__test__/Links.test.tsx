import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Links from '..';
import { BrowserRouter as Router } from 'react-router-dom';

const client = new QueryClient();

describe('Links component', () => {
  it('should display Links component when rendered', () => {
    const { queryByText } = render(
      <Router>
        <QueryClientProvider client={client}>
          <Links />
        </QueryClientProvider>
      </Router>
    );

    expect(queryByText('Links')).toBeInTheDocument();
  });
});
