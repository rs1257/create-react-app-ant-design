import withinDayPclp from '../../../data/withinDayPclp.json';
import LineGraph from '../../../components/LineGraph';
import { convertToEpochTime, trimDate } from '../../../utils/dateTime';

const WithinDayPclpGraph = (): JSX.Element => {
  const { data: withinDayPclpData } = withinDayPclp;

  const transformedData = withinDayPclpData.map((dataItem) => {
    const { applicableAtUkLocalTime } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime, 'hour'));

    return { ...dataItem, applicableAtUkLocalTime: epochTime };
  });

  return (
    <>
      <h1>Within Day PCLP</h1>
      <LineGraph
        data={[transformedData]}
        yAxisDataKey="value"
        xAxisDataKey="applicableAtUkLocalTime"
      />
    </>
  );
};

export default WithinDayPclpGraph;
