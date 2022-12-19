import LineGraph from '../../../components/LineGraph';
import { storageStockPositionGraphDataFormatter } from '../Formatters/storageStockPositionDataFormatter';
import { getFullMonth } from '../../../utils/dateTime';
import dayjs from 'dayjs';
import Loader from '../../../components/Loader';
import useGetGraphData from '../../../api/useGetGraphData';

const StorageStockPositionGraph = (): JSX.Element => {
  const { isLoading, error, data } = useGetGraphData(
    'https://mip-prd-web.azurewebsites.net/api/AnnualStorageStockLevel',
    ['stockPositionGraph']
  );

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + (error as Error).message}</>;

  const { current, previous } = storageStockPositionGraphDataFormatter(data?.data);

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
