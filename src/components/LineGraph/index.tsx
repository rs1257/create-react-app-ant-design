import './LineGraph.scss';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';
import { getTime } from '../../utils/dateTime';
import { roundNumber } from '../../utils/number';

interface LineGraphProps<T> {
  data: T[];
  xAxisDataKey: string;
  yAxisDataKey: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

const numberFormatter = (value: string): string => {
  return roundNumber(value);
};

const timeFormatter = (value: string): string => {
  return getTime(value);
};

const LineGraph = <T,>({
  data,
  xAxisDataKey,
  yAxisDataKey,
  xAxisLabel,
  yAxisLabel,
}: LineGraphProps<T>): JSX.Element => {
  const lineColours = ['#8884d8', '#82ca9d'];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        className="line-graph"
        width={700}
        height={500}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid />
        <XAxis
          dataKey={xAxisDataKey}
          type="number"
          domain={['auto', 'auto']}
          tickFormatter={timeFormatter}
          label={{
            value: xAxisLabel ?? 'Time',
            dy: 20,
          }}
        />
        <YAxis
          domain={['auto', 'auto']}
          tickFormatter={numberFormatter}
          label={{
            value: yAxisLabel ?? 'Value',
            angle: -90,
            dx: -40,
          }}
        />
        <Tooltip formatter={numberFormatter} labelFormatter={timeFormatter} />
        {data.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            data={line}
            dataKey={yAxisDataKey}
            stroke={lineColours[index]}
            strokeWidth={2}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
