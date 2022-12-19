import LineGraph from '../../../components/LineGraph';
import { withinDayPclpDataFormatter } from '../Formatters/withinDayPclpDataFormatter';
import useGetGraphData from '../../../api/useGetGraphData';
import Loader from '../../../components/Loader';

const WithinDayPclpGraph = (): JSX.Element => {
  const { isLoading, error, data } = useGetGraphData(
    'https://mip-prd-web.azurewebsites.net/api/WithinDayPclp',
    ['withinDayPclp']
  );

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + (error as Error).message}</>;

  const transformedData = withinDayPclpDataFormatter(data?.data);

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
