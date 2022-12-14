import storageStockPosition from '../../../data/storageStockPosition.json';
import LineGraph from '../../../components/LineGraph';
import { storageStockPositionGraphDataFormatter } from '../Formatters/storageStockPositionDataFormatter';
import { getFullMonth } from '../../../utils/dateTime';
import dayjs from 'dayjs';

const StorageStockPositionGraph = (): JSX.Element => {
  const { data: storageStockData } = storageStockPosition;
  const { current, previous } = storageStockPositionGraphDataFormatter(storageStockData);

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
