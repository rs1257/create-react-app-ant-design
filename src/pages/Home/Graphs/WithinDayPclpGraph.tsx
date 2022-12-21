import LineGraph from '../../../components/LineGraph';
import { withinDayPclpDataFormatter } from '../Formatters/withinDayPclpDataFormatter';
import useGetRequest from '../../../api/useGetRequest';
import { GraphResponseData } from '../../../types/api';
import GraphCard from '../../../components/GraphCard';

const WithinDayPclpGraph = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: withinDayPclpData,
  } = useGetRequest<GraphResponseData>('https://mip-prd-web.azurewebsites.net/api/WithinDayPclp', [
    'withinDayPclpGraph',
  ]);

  const transformedData = withinDayPclpDataFormatter(withinDayPclpData?.data);

  return (
    <GraphCard title="Within Day PCLP" isLoading={isLoading} error={error}>
      <LineGraph
        data={[transformedData]}
        yAxisDataKey="value"
        xAxisDataKey="applicableAtUkLocalTime"
        labels={['Within Day PCLP']}
      />
    </GraphCard>
  );
};

export default WithinDayPclpGraph;
