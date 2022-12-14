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
  forecastSupplyDemandData: Record<string, string | number | null>[]
): StorageStockData => {
  const initialSupplyDemandData: StorageStockData = { current: [], previous: [] };

  const sortedData = forecastSupplyDemandData.sort(
    (a, b) => +dayjs(a.applicableAtUkLocalTime) - +dayjs(b.applicableAtUkLocalTime)
  );

  const transformedData = sortedData.reduce((acc, dataItem) => {
    const { applicableAtUkLocalTime, publicationObjectName } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime, 'day'));

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
