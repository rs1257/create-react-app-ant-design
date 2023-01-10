import { ForecastMarginsNoticeAndDemandResponseData } from '../../../types/api';
import { DataTableDataType, DataTableHeader, FormattedTableData } from '../../../types/tables';
import { getDate, getTime } from '../../../utils/dateTime';

const getHeaders = (header: string[]): DataTableHeader[] =>
  header.map((cell, index) => {
    return {
      title: cell,
      dataIndex: String(index + 1),
    };
  });

const getMarginsNoticeData = (mnData: string[]): DataTableDataType => {
  return mnData.reduce((result: DataTableDataType, item, index): DataTableDataType => {
    result[String(index + 1) as keyof DataTableDataType] = item;
    result.name = `mn${index}`;
    return result;
  }, {});
};

const getDemandForecastData = (demandData: string[]): DataTableDataType => {
  return demandData.reduce((result: DataTableDataType, item, index): DataTableDataType => {
    result[String(index + 1) as keyof DataTableDataType] = item;
    result.name = `demand${index}`;
    return result;
  }, {});
};

export const getFormattedForecastMarginsData = (
  rawData?: ForecastMarginsNoticeAndDemandResponseData
): FormattedTableData => {
  if (!rawData) {
    return {
      headers: [],
      data: [],
      meta: {},
    };
  }
  const {
    mntriggerdemandforecastweekly: { header, mnData, demandData },
    gasDay,
  } = rawData;
  const marginsNotice = getMarginsNoticeData(mnData);
  const demandForecastData = getDemandForecastData(demandData);
  const headers = getHeaders(header);
  return {
    headers,
    data: [marginsNotice, demandForecastData],
    meta: {
      date: getDate(gasDay.day),
      time: getTime(gasDay.day),
    },
  };
};
