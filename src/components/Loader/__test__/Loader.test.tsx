import { render } from '@testing-library/react';
import Loader from '..';

describe('Loader component', () => {
  it('should display Loader component when rendered', () => {
    const { queryByText } = render(<Loader />);

    expect(queryByText('Loading...')).toBeInTheDocument();
  });
});
