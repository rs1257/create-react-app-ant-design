import { render } from '@testing-library/react';
import EntryZoneGraphs from '..';

describe('EntryZoneGraphs component', () => {
  it('should display EntryZoneGraphs component when rendered', () => {
    const { queryByText } = render(<EntryZoneGraphs />);

    expect(queryByText('Entry Zone Graphs')).toBeInTheDocument();
  });
});
