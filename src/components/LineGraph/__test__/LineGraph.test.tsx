import LineGraph from '..';
import { render } from '@testing-library/react';

describe('LineGraph component', () => {
  it('should display LineGraph component when rendered', () => {
    const { queryByText } = render(<LineGraph lines={[]} />);

    expect(queryByText('Time')).toBeInTheDocument();
    expect(queryByText('Value')).toBeInTheDocument();
  });
});
