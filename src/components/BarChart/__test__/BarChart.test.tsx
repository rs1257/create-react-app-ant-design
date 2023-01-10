import { render } from '@testing-library/react';
import BarChart from '..';

describe('BarChart component', () => {
  it('should display BarChart component when rendered', async () => {
    const { findByText } = render(
      <BarChart
        chartData={[{ name: 'Test Location', value: 10 }]}
        yAxisLabel={'mcm/day'}
        xAxisLabel={'Location'}
        chartName="Test Chart"
      />
    );
    const text = await findByText('mcm/day of Test Location: 10');

    expect(text).toBeInTheDocument();
  });
});
