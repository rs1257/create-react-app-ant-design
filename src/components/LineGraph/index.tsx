import './LineGraph.scss';
import dayjs from 'dayjs';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';

interface Props {
  lines: unknown[];
}

const LineGraph = ({ lines }: Props): JSX.Element => {
  const lineColours = ['#8884d8', '#82ca9d'];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        className="line-graph"
        width={730}
        height={250}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="5" />
        <XAxis
          dataKey="applicableAtUkLocalTime"
          type="number"
          domain={['auto', 'auto']}
          tickFormatter={(value: number): string => {
            return dayjs(value).format('HH:mm');
          }}
          label={{
            value: 'Time',
            dy: 20,
          }}
        />
        <YAxis
          domain={['auto', 'auto']}
          tickFormatter={(value): string => {
            return parseFloat(String(value)).toFixed(2);
          }}
          label={{
            value: 'Value',
            angle: -90,
            dx: -40,
          }}
        />
        <Tooltip
          formatter={(value: string): string => {
            return parseFloat(String(value)).toFixed(2);
          }}
          labelFormatter={(value: string): string => {
            return 'Time: ' + dayjs(value).format('HH:mm');
          }}
        />
        {lines.map((line, index) => {
          return (
            <Line
              key={index}
              type="monotone"
              data={line}
              dataKey="value"
              stroke={lineColours[index]}
              strokeWidth={2}
              isAnimationActive={false}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
