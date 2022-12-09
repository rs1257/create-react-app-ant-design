import CustomButton from '../../components/CustomButton';
import LinkButton from '../../components/LinkButton';
import Loader from '../../components/Loader';
import './Home.scss';
import forecastSupplyDemandData from './data.json';
import { Line } from '@ant-design/plots';
import dayjs from 'dayjs';

const Home = (): JSX.Element => {
  const onClick = (): void => {
    // eslint-disable-next-line no-console
    console.log('click');
  };

  const { data } = forecastSupplyDemandData;
  // eslint-disable-next-line no-console
  console.log(data);

  const transformedData = data.map((datum) => {
    const { applicableAtUkLocalTime } = datum;
    const date = new Date(applicableAtUkLocalTime);
    // TODO Refactor to use dayjs instead
    const formattedLocalTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours()
    );

    return { ...datum, applicableAtUkLocalTime: formattedLocalTime };
  });

  const { min, max } = data.reduce(
    ({ min, max }, { value }) => {
      return {
        min: value < min ? value : min,
        max: value > max ? value : max,
      };
    },
    { min: Infinity, max: -Infinity }
  );

  // TODO move into a graph component
  const config = {
    data: transformedData,
    xField: 'applicableAtUkLocalTime',
    yField: 'value',
    seriesField: 'publicationObjectName',
    meta: {
      applicableAtUkLocalTime: {
        formatter: (value: string): string => {
          return dayjs(new Date(value)).format('HH:mm');
        },
      },
      value: { min, max },
    },
    xAxis: {
      type: 'time',
    },
  };

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

      <Line {...config} smooth />
    </>
  );
};

export default Home;
