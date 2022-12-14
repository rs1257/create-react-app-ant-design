import withinDayPclp from '../../../data/withinDayPclp.json';
import LineGraph from '../../../components/LineGraph';
import { withinDayPclpDataFormatter } from '../Formatters/withinDayPclpDataFormatter';

const WithinDayPclpGraph = (): JSX.Element => {
  const { data: withinDayPclpData } = withinDayPclp;
  const transformedData = withinDayPclpDataFormatter(withinDayPclpData);

  return (
    <>
      <h1>Within Day PCLP</h1>
      <LineGraph
        data={[transformedData]}
        yAxisDataKey="value"
        xAxisDataKey="applicableAtUkLocalTime"
        labels={['Within Day PCLP']}
      />
    </>
  );
};

export default WithinDayPclpGraph;
