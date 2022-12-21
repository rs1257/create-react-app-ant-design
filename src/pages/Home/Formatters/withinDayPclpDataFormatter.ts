import { convertToEpochTime, trimDate } from '../../../utils/dateTime';
import { GraphApiResponseData } from '../../../types/api';

export const withinDayPclpDataFormatter = (
  withinDayPclpData?: GraphApiResponseData[]
): Record<string, unknown>[] => {
  if (!withinDayPclpData) {
    return [];
  }

  const transformedData = withinDayPclpData.map((dataItem) => {
    const { applicableAtUkLocalTime } = dataItem;
    const epochTime = convertToEpochTime(trimDate(applicableAtUkLocalTime, 'hour'));

    return { ...dataItem, applicableAtUkLocalTime: epochTime };
  });

  return transformedData;
};
