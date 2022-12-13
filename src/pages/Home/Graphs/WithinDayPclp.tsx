import withinDayPclp from '../../../data/withinDayPclp.json';
import dayjs from 'dayjs';
import LineGraph from '../../../components/LineGraph';

const WithinDayPclpGraph = (): JSX.Element => {
  const { data } = withinDayPclp;

  const transformedData = data.map((datum) => {
    const { applicableAtUkLocalTime } = datum;
    const epochTime = +dayjs(applicableAtUkLocalTime).startOf('hour');

    return { ...datum, applicableAtUkLocalTime: epochTime };
  });

  return (
    <>
      <h1>Within Day PCLP</h1>
      <LineGraph lines={[transformedData]} xDataKey="value" />
    </>
  );
};

export default WithinDayPclpGraph;
