import forecastSupplyDemandData from '../../../data/forecastSupplyDemand.json';
import LineGraph from '../../../components/LineGraph';
import { convertToEpochTime, trimDate } from '../../../utils/dateTime';

interface SupplyDemandData {
  supply: Record<string, unknown>[];
  demand: Record<string, unknown>[];
}

enum PublicationObjectName {
  supply = 'Supply',
  demand = 'Demand',
}

const ForecastSupplyDemandGraph = (): JSX.Element => {
  const { data: supplyDemandData } = forecastSupplyDemandData;

  const initialSupplyDemandData: SupplyDemandData = { supply: [], demand: [] };
  const { demand, supply } = supplyDemandData.reduce((acc, dataItem) => {
    const { applicableAtUkLocalTime, publicationObjectName } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime, 'hour'));

    const transformedDataItem = { ...dataItem, applicableAtUkLocalTime: epochTime };
    if (publicationObjectName === PublicationObjectName.supply) {
      acc.supply.push(transformedDataItem);
    }

    if (publicationObjectName === PublicationObjectName.demand) {
      acc.demand.push(transformedDataItem);
    }

    return acc;
  }, initialSupplyDemandData);

  return (
    <>
      <h1>Forecast Supply and Demand</h1>
      <LineGraph
        data={[demand, supply]}
        yAxisDataKey="value"
        xAxisDataKey="applicableAtUkLocalTime"
      />
    </>
  );
};

export default ForecastSupplyDemandGraph;
