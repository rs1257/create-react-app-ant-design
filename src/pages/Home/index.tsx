import CustomButton from '../../components/CustomButton';
import LinkButton from '../../components/LinkButton';
import Loader from '../../components/Loader';
import './Home.scss';
import forecastSupplyDemandData from './data.json';
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

const Home = (): JSX.Element => {
  const onClick = (): void => {
    // eslint-disable-next-line no-console
    console.log('click');
  };

  const { data } = forecastSupplyDemandData;
  // eslint-disable-next-line no-console
  console.log(data);

  const initialSupplyDemandData: SupplyDemandData = { supply: [], demand: [] };
  const transformedSupplyDemandData = data.reduce((acc, datum) => {
    const { applicableAtUkLocalTime } = datum;
    const date = new Date(applicableAtUkLocalTime);

    // TODO Refactor to use dayjs instead
    const formattedLocalTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours()
    ).getTime();

    const dataItem = { ...datum, applicableAtUkLocalTime: formattedLocalTime };
    if (datum.publicationObjectName === 'Supply') {
      acc.supply.push(dataItem);
    }

    if (datum.publicationObjectName === 'Demand') {
      acc.demand.push(dataItem);
    }

    return acc;
  }, initialSupplyDemandData);

  return (
    <>
      <div className="home">Home</div>

      <div>
        <h1>Primary</h1>
        <CustomButton type="primary" size="large" onClick={onClick}>
          Click Me
        </CustomButton>
        <CustomButton type="primary" size="middle" onClick={onClick}>
          Click Me
        </CustomButton>
        <CustomButton type="primary" size="small" onClick={onClick}>
          Click Me
        </CustomButton>
      </div>

      <div>
        <h1>Secondary</h1>
        <CustomButton size="large" onClick={onClick}>
          Click Me
        </CustomButton>
        <CustomButton size="middle" onClick={onClick}>
          Click Me
        </CustomButton>
        <CustomButton size="small" onClick={onClick}>
          Click Me
        </CustomButton>
      </div>

      <div>
        <h1>Link</h1>
        <LinkButton size="large" href={'#'} target="_blank">
          Click Me New tab
        </LinkButton>
        <LinkButton size="large" href={'#'}>
          Click Me
        </LinkButton>
      </div>
      <div>
        <h1>Loader</h1>
        <Loader />
      </div>

      <ResponsiveContainer width="100%" height={700}>
        <LineChart width={730} height={250} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
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
            labelFormatter={(value: string): string => {
              return dayjs(value).format('HH:mm');
            }}
          />
          <Line
            type="monotone"
            data={transformedSupplyDemandData.supply}
            dataKey="value"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            data={transformedSupplyDemandData.demand}
            dataKey="value"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Home;
