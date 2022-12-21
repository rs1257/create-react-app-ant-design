import LineGraph from '../../../components/LineGraph';
import { storageStockPositionGraphDataFormatter } from '../Formatters/storageStockPositionDataFormatter';
import { getFullMonth } from '../../../utils/dateTime';
import dayjs from 'dayjs';
import Loader from '../../../components/Loader';
import useGetRequest from '../../../api/useGetRequest';
import { GraphResponseData } from '../../../types/api';

const StorageStockPositionGraph = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: storageStockPositionData,
  } = useGetRequest<GraphResponseData>(
    'https://mip-prd-web.azurewebsites.net/api/AnnualStorageStockLevel',
    ['stockPositionGraph']
  );

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + error.message}</>;

  const { current, previous } = storageStockPositionGraphDataFormatter(
    storageStockPositionData?.data
  );

  return (
    <>
      <h1>Storage Stock Position</h1>
      <LineGraph
        data={[current, previous]}
        yAxisDataKey="value"
        xAxisDataKey="applicableAtUkLocalTime"
        labels={['This year', 'Last year']}
        xAxisTickFormatter={(value: string): string => {
          return getFullMonth(value);
        }}
        tooltipLabelFormatter={(value: string): string => {
          return dayjs(value).format('DD MMMM');
        }}
        dot={false}
      />
    </>
  );
};

export default StorageStockPositionGraph;
