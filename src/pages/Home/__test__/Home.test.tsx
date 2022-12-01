import { render } from '@testing-library/react';
import Home from '..';

describe('Home component', () => {
  it('should display Home component when rendered', () => {
    const { queryByText } = render(<Home />);

    expect(queryByText('Home')).toBeInTheDocument();
  });
});
