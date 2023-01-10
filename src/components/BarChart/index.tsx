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

const BarChart: FC<BarChartProps> = ({ chartData, yAxisLabel, chartName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = chartData[activeIndex];

  return (
    <div>
      <h2>{chartName}</h2>
      <ResponsiveContainer width="100%" height={600}>
        <Chart data={chartData} margin={{ bottom: 195, right: 50 }}>
          <CartesianGrid />
          <Bar
            dataKey="value"
            onClick={(entry: BarChartDataType, index: number): void => setActiveIndex(index)}
            barSize={20}
          >
            {chartData.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? '#82ca9d' : '#8884d8'}
                key={`cell-${index}`}
                data-testid={entry.name}
              />
            ))}
          </Bar>
          <XAxis
            dataKey={'name'}
            angle={70}
            interval={0}
            dy={5}
            dx={5}
            tick={{ textAnchor: 'start' }}
          />
          <YAxis
            dataKey={'value'}
            label={yAxisLabel && { value: yAxisLabel, angle: -90, position: 'insideLeft' }}
          />
          <Tooltip cursor={{ fill: '#ffffff55' }} />
        </Chart>
      </ResponsiveContainer>
      {activeItem && yAxisLabel && (
        <p className="content">{`${yAxisLabel} of ${activeItem.name}: ${activeItem.value}`}</p>
      )}
    </div>
  );
};

export default BarChart;
