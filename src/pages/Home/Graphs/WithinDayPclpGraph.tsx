import LineGraph from '../../../components/LineGraph';
import { withinDayPclpDataFormatter } from '../Formatters/withinDayPclpDataFormatter';
import useGetGraphData from '../../../api/useGetGraphData';
import Loader from '../../../components/Loader';
import { GraphApiResponse } from './StorageStockPositionGraph';

const WithinDayPclpGraph = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: withinDayPclpData,
  } = useGetGraphData<GraphApiResponse>('https://mip-prd-web.azurewebsites.net/api/WithinDayPclp', [
    'withinDayPclpGraph',
  ]);

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + (error as Error).message}</>;

  const transformedData = withinDayPclpDataFormatter(withinDayPclpData?.data);

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
