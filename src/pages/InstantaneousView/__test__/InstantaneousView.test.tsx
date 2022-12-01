import { render } from '@testing-library/react';
import InstantaneousView from '..';

describe('InstantaneousView component', () => {
  it('should display InstantaneousView component when rendered', () => {
    const { queryByText } = render(<InstantaneousView />);

    expect(queryByText('Instantaneous View')).toBeInTheDocument();
  });
});
