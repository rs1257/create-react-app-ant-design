import { convertToEpochTime, trimDate } from '../../../utils/dateTime';

export interface SupplyDemandData {
  supply: Record<string, unknown>[];
  demand: Record<string, unknown>[];
}

enum PublicationObjectName {
  supply = 'Supply',
  demand = 'Demand',
}

export const forecastSupplyDemandDataFormatter = (
  forecastSupplyDemandData?: Record<string, unknown>[]
): SupplyDemandData => {
  if (!forecastSupplyDemandData) {
    return { supply: [], demand: [] };
  }

  const initialSupplyDemandData: SupplyDemandData = { supply: [], demand: [] };
  const transformedData = forecastSupplyDemandData.reduce((acc, dataItem) => {
    const { applicableAtUkLocalTime, publicationObjectName } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime as string, 'hour'));

    const transformedDataItem = { ...dataItem, applicableAtUkLocalTime: epochTime };
    if (publicationObjectName === PublicationObjectName.supply) {
      acc.supply.push(transformedDataItem);
    }

    if (publicationObjectName === PublicationObjectName.demand) {
      acc.demand.push(transformedDataItem);
    }

    return acc;
  }, initialSupplyDemandData);

  return transformedData;
};
