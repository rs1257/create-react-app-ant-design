import { convertToEpochTime, trimDate } from '../../../utils/dateTime';
import { GraphApiResponseData } from '../../../types/api';
import { SupplyDemandPublicationObjectName, SupplyDemandData } from '../../../types/graphs';

export const forecastSupplyDemandDataFormatter = (
  forecastSupplyDemandData?: GraphApiResponseData[]
): SupplyDemandData => {
  if (!forecastSupplyDemandData) {
    return { supply: [], demand: [] };
  }

  const initialSupplyDemandData: SupplyDemandData = { supply: [], demand: [] };
  const transformedData = forecastSupplyDemandData.reduce((acc, dataItem) => {
    const { applicableAtUkLocalTime, publicationObjectName } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime, 'hour'));

    const transformedDataItem = { ...dataItem, applicableAtUkLocalTime: epochTime };
    if (publicationObjectName === SupplyDemandPublicationObjectName.supply) {
      acc.supply.push(transformedDataItem);
    }

    if (publicationObjectName === SupplyDemandPublicationObjectName.demand) {
      acc.demand.push(transformedDataItem);
    }

    return acc;
  }, initialSupplyDemandData);

  return transformedData;
};
