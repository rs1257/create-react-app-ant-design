import { convertToEpochTime, trimDate } from '../../../utils/dateTime';

export const withinDayPclpDataFormatter = (
  withinDayPclpData?: Record<string, unknown>[]
): Record<string, unknown>[] => {
  if (!withinDayPclpData) {
    return [];
  }

  const transformedData = withinDayPclpData.map((dataItem) => {
    const { applicableAtUkLocalTime } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime as string, 'hour'));

    return { ...dataItem, applicableAtUkLocalTime: epochTime };
  });

  return transformedData;
};
