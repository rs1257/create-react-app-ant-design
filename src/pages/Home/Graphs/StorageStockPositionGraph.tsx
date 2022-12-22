import LineGraph from '../../../components/LineGraph';
import { storageStockPositionGraphDataFormatter } from '../Formatters/storageStockPositionDataFormatter';
import { getFullMonth } from '../../../utils/dateTime';
import dayjs from 'dayjs';
import useGetRequest from '../../../api/useGetRequest';
import { GraphResponseData } from '../../../types/api';
import GraphCard from '../../../components/GraphCard';

const StorageStockPositionGraph = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: storageStockPositionData,
  } = useGetRequest<GraphResponseData>(
    `${process.env.REACT_APP_API || ''}/api/AnnualStorageStockLevel`,
    ['stockPositionGraph']
  );

  const { current, previous } = storageStockPositionGraphDataFormatter(
    storageStockPositionData?.data
  );

  return (
    <GraphCard title="Storage Stock Position" isLoading={isLoading} error={error}>
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
    </GraphCard>
  );
};

export default StorageStockPositionGraph;
