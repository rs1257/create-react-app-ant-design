import { convertToEpochTime, trimDate } from '../../../utils/dateTime';
import dayjs from 'dayjs';

interface StorageStockData {
  current: Record<string, unknown>[];
  previous: Record<string, unknown>[];
}

enum PublicationObjectName {
  current = 'CURRENT',
  previous = 'PREVIOUS',
}

export const storageStockPositionGraphDataFormatter = (
  forecastSupplyDemandData?: Record<string, unknown>[]
): StorageStockData => {
  if (!forecastSupplyDemandData) {
    return { current: [], previous: [] };
  }
  const initialSupplyDemandData: StorageStockData = { current: [], previous: [] };

  const sortedData = forecastSupplyDemandData.sort(
    (a, b) =>
      +dayjs(a.applicableAtUkLocalTime as string) - +dayjs(b.applicableAtUkLocalTime as string)
  );

  const transformedData = sortedData.reduce((acc, dataItem) => {
    const { applicableAtUkLocalTime, publicationObjectName } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime as string, 'day'));

    const transformedDataItem = { ...dataItem, applicableAtUkLocalTime: epochTime };
    if (publicationObjectName === PublicationObjectName.current) {
      acc.current.push(transformedDataItem);
    }

    if (publicationObjectName === PublicationObjectName.previous) {
      acc.previous.push({ ...dataItem, applicableAtUkLocalTime: +dayjs(epochTime).add(1, 'year') });
    }

    return acc;
  }, initialSupplyDemandData);

  return transformedData;
};
