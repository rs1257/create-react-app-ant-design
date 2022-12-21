import LineGraph from '../../../components/LineGraph';
import { withinDayPclpDataFormatter } from '../Formatters/withinDayPclpDataFormatter';
import useGetRequest from '../../../api/useGetRequest';
import Loader from '../../../components/Loader';
import { GraphResponseData } from '../../../types/api';

const WithinDayPclpGraph = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: withinDayPclpData,
  } = useGetRequest<GraphResponseData>('https://mip-prd-web.azurewebsites.net/api/WithinDayPclp', [
    'withinDayPclpGraph',
  ]);

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + error.message}</>;

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
