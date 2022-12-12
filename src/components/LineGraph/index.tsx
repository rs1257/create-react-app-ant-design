import './LineGraph.scss';
import forecastSupplyDemandData from '../../data/forecastSupplyDemand.json';
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

interface Datum {
  value: number;
  applicableAt: string;
  applicableAtUkLocalTime: string | number;
  qualityIndicator: null;
  publicationObjectName: string;
  applicableFor: string;
  generatedTimeStamp: string;
  generatedTimeStampUkLocalTime: string;
  rawDisplayValue: string;
}

interface SupplyDemandData {
  supply: Datum[];
  demand: Datum[];
}

const LineGraph = (): JSX.Element => {
  const { data } = forecastSupplyDemandData;

  const initialSupplyDemandData: SupplyDemandData = { supply: [], demand: [] };
  const transformedSupplyDemandData = data.reduce((acc, datum) => {
    const { applicableAtUkLocalTime } = datum;
    const epochTime = +dayjs(applicableAtUkLocalTime).startOf('hour');

    const dataItem = { ...datum, applicableAtUkLocalTime: epochTime };
    if (datum.publicationObjectName === 'Supply') {
      acc.supply.push(dataItem);
    }

    if (datum.publicationObjectName === 'Demand') {
      acc.demand.push(dataItem);
    }

    return acc;
  }, initialSupplyDemandData);

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
            dy: 15,
          }}
          tickCount={5}
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
          tickMargin={5}
        />
        <Tooltip
          formatter={(value: string): string => {
            return parseFloat(String(value)).toFixed(2);
          }}
          labelFormatter={(value: string): string => {
            return 'Time: ' + dayjs(value).format('HH:mm');
          }}
        />
        <Line
          type="monotone"
          data={transformedSupplyDemandData.supply}
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          data={transformedSupplyDemandData.demand}
          dataKey="value"
          stroke="#82ca9d"
          strokeWidth={2}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
