import dayjs from 'dayjs';

export const getTime = (timeString: string): string => dayjs(new Date(timeString)).format('HH:mm');

export const getDate = (dateString: string): string =>
  dayjs(new Date(dateString)).format('YYYY-MM-DD');

export const getFullMonth = (dateString: string): string =>
  dayjs(new Date(dateString)).format('MMMM');

export const trimDate = (
  dateString: string | number | null,
  trimDateTo: dayjs.OpUnitType
): dayjs.Dayjs => dayjs(dateString).startOf(trimDateTo);

export const convertToEpochTime = (date: dayjs.Dayjs): number => +date;

export const getDefaultDateRange = (): [string, string] => [
  dayjs('00:00:00', 'HH:mm:ss').add(-1, 'day').format('YYYY-MM-DD HH:mm:ss'),
  dayjs('11:59:59', 'HH:mm:ss').add(-1, 'day').format('YYYY-MM-DD HH:mm:ss'),
];

export enum DateRange {
  StartDate = 0,
  EndDate,
}
