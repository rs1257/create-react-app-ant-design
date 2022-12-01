import { render } from '@testing-library/react';
import StatusView from '..';

describe('StatusView component', () => {
  it('should display StatusView component when rendered', () => {
    const { queryByText } = render(<StatusView />);

    expect(queryByText('Status View')).toBeInTheDocument();
  });
});
