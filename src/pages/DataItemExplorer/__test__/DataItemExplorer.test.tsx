import { render } from '@testing-library/react';
import DataItemExplorer from '..';

describe('DataItemExplorer component', () => {
  it('should display DataItemExplorer component when rendered', () => {
    const { queryByText } = render(<DataItemExplorer />);

    expect(queryByText('Data Item Explorer')).toBeInTheDocument();
  });
});
