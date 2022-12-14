import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from 'recharts';
import { getTime } from '../../utils/dateTime';
import { roundNumber } from '../../utils/number';
import hexToRgba from 'hex-to-rgba';
import useInteractiveLegend from '../../hooks/useInteractiveLegend';
import { LineGraphProps } from '../../types/props';
import styles from './LineGraph.module.scss';
import '../../assets/recharts.overrides.scss';

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
  labels,
  xAxisTickFormatter,
  tooltipLabelFormatter,
  dot = true,
}: LineGraphProps<T>): JSX.Element => {
  const lineColours = [
    '#8884d8',
    '#82ca9d',
    '#DA70D6',
    '#191970',
    '#9932CC',
    '#FF00FF',
    '#32CD32',
    '#00FF7F',
    '#00CED1',
    '#87CEFA',
  ];

  const { lines, hover, selectLine, handleLegendMouseEnter, handleLegendMouseLeave } =
    useInteractiveLegend(labels);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        className={styles.lineGraph}
        width={700}
        height={500}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid />
        <Legend
          verticalAlign="top"
          height={36}
          onClick={selectLine}
          onMouseOver={handleLegendMouseEnter}
          onMouseOut={handleLegendMouseLeave}
          iconType="circle"
        />
        <XAxis
          dataKey={xAxisDataKey}
          type="number"
          domain={['auto', 'auto']}
          tickFormatter={xAxisTickFormatter ? xAxisTickFormatter : timeFormatter}
          label={{
            value: xAxisLabel ?? 'Time',
            dy: 20,
          }}
          allowDuplicatedCategory={false}
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
        <Tooltip
          formatter={numberFormatter}
          labelFormatter={tooltipLabelFormatter ? tooltipLabelFormatter : timeFormatter}
        />
        {data.map((line, index) => (
          <Line
            dot={dot}
            key={index}
            name={labels[index]}
            type="monotone"
            data={line}
            dataKey={yAxisDataKey}
            stroke={
              hover && hover !== labels[index]
                ? hexToRgba(lineColours[index], 0.5)
                : lineColours[index]
            }
            strokeWidth={2}
            isAnimationActive={false}
            hide={lines[labels[index]] === true}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
