import { useState, FC } from 'react';
import {
  BarChart as Chart,
  Bar,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { BarChartDataType, BarChartProps } from '../../types/graphs';

const BarChart: FC<BarChartProps> = ({ data, xAxisLabel, yAxisLabel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <Chart data={data}>
          <CartesianGrid />
          <Bar
            dataKey="value"
            onClick={(entry: BarChartDataType, index: number): void => setActiveIndex(index)}
            barSize={20}
          >
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? '#82ca9d' : '#8884d8'}
                key={`cell-${index}`}
                data-testid={entry.name}
              />
            ))}
          </Bar>
          <XAxis dataKey={'name'} label={xAxisLabel && xAxisLabel} />
          <YAxis
            dataKey={'value'}
            label={yAxisLabel && { value: yAxisLabel, angle: -90, position: 'insideLeft' }}
          />
          <Tooltip cursor={{ fill: '#ffffff55' }} />
        </Chart>
      </ResponsiveContainer>
      {activeItem && (
        <p className="content">{`${yAxisLabel} of ${activeItem.name}: ${activeItem.value}`}</p>
      )}
    </>
  );
};

export default BarChart;
