import { render } from '@testing-library/react';
import BarChart from '..';

describe('BarChart component', () => {
  it('should display BarChart component when rendered', async () => {
    const { findByText } = render(
      <BarChart
        data={[{ name: 'Test Location', value: 10 }]}
        yAxisLabel={'mcm/day'}
        xAxisLabel={'Location'}
      />
    );
    const text = await findByText('mcm/day of Test Location: 10');

    expect(text).toBeInTheDocument();
  });
});
