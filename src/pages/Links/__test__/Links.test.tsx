import { render } from '@testing-library/react';
import Links from '..';

describe('Links component', () => {
  it('should display Links component when rendered', () => {
    const { queryByText } = render(<Links />);

    expect(queryByText('Links')).toBeInTheDocument();
  });
});
