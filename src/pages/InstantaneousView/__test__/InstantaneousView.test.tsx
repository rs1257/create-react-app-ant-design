import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { client } from '../../../mockQueryClient';
import InstantaneousView from '..';

describe('InstantaneousView component', () => {
  it('should display InstantaneousView component when rendered', () => {
    const { queryByText } = render(
      <QueryClientProvider client={client}>
        <InstantaneousView />
      </QueryClientProvider>
    );

    queryByText('Instantaneous View');
  });
});
