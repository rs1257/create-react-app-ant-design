import { convertToEpochTime, trimDate } from '../../../utils/dateTime';
import dayjs from 'dayjs';
import { GraphApiResponseData } from '../../../types/api';
import { StorageStockPublicationObjectName, StorageStockData } from '../../../types/graphs';

export const storageStockPositionGraphDataFormatter = (
  forecastSupplyDemandData?: GraphApiResponseData[]
): StorageStockData => {
  if (!forecastSupplyDemandData) {
    return { current: [], previous: [] };
  }
  const initialSupplyDemandData: StorageStockData = { current: [], previous: [] };

  const sortedData = forecastSupplyDemandData.sort(
    (a, b) => +dayjs(a.applicableAtUkLocalTime) - +dayjs(b.applicableAtUkLocalTime)
  );

  const transformedData = sortedData.reduce((acc, dataItem) => {
    const { applicableAtUkLocalTime, publicationObjectName } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime, 'day'));

    const transformedDataItem = { ...dataItem, applicableAtUkLocalTime: epochTime };
    if (publicationObjectName === StorageStockPublicationObjectName.current) {
      acc.current.push(transformedDataItem);
    }

    if (publicationObjectName === StorageStockPublicationObjectName.previous) {
      acc.previous.push({ ...dataItem, applicableAtUkLocalTime: +dayjs(epochTime).add(1, 'year') });
    }

    return acc;
  }, initialSupplyDemandData);

  return transformedData;
};
