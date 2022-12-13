import { convertToEpochTime, trimDate } from '../../../utils/dateTime';

export const withinDayPclpDataFormatter = (
  withinDayPclpData: Record<string, string | number | null>[]
): Record<string, unknown>[] => {
  const transformedData = withinDayPclpData.map((dataItem) => {
    const { applicableAtUkLocalTime } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime, 'hour'));

    return { ...dataItem, applicableAtUkLocalTime: epochTime };
  });

  return transformedData;
};
