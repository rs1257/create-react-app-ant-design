import dayjs from 'dayjs';

export const getTime = (timeString: string): string => dayjs(new Date(timeString)).format('HH:mm');

export const getDate = (dateString: string): string =>
  dayjs(new Date(dateString)).format('YYYY-MM-DD');

export const trimDate = (
  dateString: string | number | null,
  trimDateTo: dayjs.OpUnitType
): dayjs.Dayjs => dayjs(dateString).startOf(trimDateTo);

export const convertToEpochTime = (date: dayjs.Dayjs): number => +date;
