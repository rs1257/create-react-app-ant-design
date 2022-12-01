import { render } from '@testing-library/react';
import ReportExplorer from '..';

describe('ReportExplorer component', () => {
  it('should display ReportExplorer component when rendered', () => {
    const { queryByText } = render(<ReportExplorer />);

    expect(queryByText('Report Explorer')).toBeInTheDocument();
  });
});
