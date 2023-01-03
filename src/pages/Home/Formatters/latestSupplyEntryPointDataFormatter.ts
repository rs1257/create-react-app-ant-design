import { DataTableDataType, FormattedData } from '../../../types/tables';
import { getDate, getTime } from '../../../utils/dateTime';
import { LatestSupplyEntryPointResponseData, SystemEntryPointData } from '../../../types/api';

export const getDateTimeFromData = (data: SystemEntryPointData[]): string =>
  data[0].applicableAtUkLocalTime;

const getFormattedData = (data: SystemEntryPointData[]): DataTableDataType[] =>
  data.map((row) => {
    return {
      name: row.name,
      value: row.value,
    };
  });

export const getFormattedSystemEntryPointsData = (
  rawData: LatestSupplyEntryPointResponseData | undefined
): FormattedData => {
  if (!rawData) {
    return {
      headers: [],
      data: [],
      meta: {},
    };
  }
  const { data } = rawData;
  return {
    headers: [
      { title: 'System Entry Name', dataIndex: 'name' },
      { title: 'Flow Rate (mcm/d)', dataIndex: 'value' },
    ],
    data: getFormattedData(data),
    meta: {
      date: getDate(getDateTimeFromData(data)),
      time: getTime(getDateTimeFromData(data)),
    },
  };
};
