import { useQuery } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';
import {
  ApiResponse,
  DataItemExplorerRequestProps,
  SoapRequestBoolean,
  SoapRequestDateType,
} from '../../types/api';

export const getRequestBody = (
  latestFlag: SoapRequestBoolean,
  applicableFor: SoapRequestBoolean,
  dateTo: string,
  dateFrom: string,
  dateType: SoapRequestDateType,
  names: string[]
): string => {
  const stringParams = names.map((name) => `<string>${name}</string>`);
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetPublicationDataWM xmlns="http://www.NationalGrid.com/MIPI/">
          <reqObject>
            <LatestFlag>${latestFlag}</LatestFlag>
            <ApplicableForFlag>${applicableFor}</ApplicableForFlag>
            <ToDate>${dateTo}</ToDate>
            <FromDate>${dateFrom}</FromDate>
            <DateType>${dateType}</DateType>
            <PublicationObjectNameList>
            ${stringParams.join(' ')}
            </PublicationObjectNameList>
          </reqObject>
        </GetPublicationDataWM>
      </soap:Body>
    </soap:Envelope>
    `;
};

export const headers = {
  SOAPAction: 'http://www.NationalGrid.com/MIPI/GetPublicationDataWM',
  'Content-Type': 'text/xml; charset=utf-8',
};

export const useDataItemExplorerRequest = <T>({
  latestFlag,
  applicableFor,
  dateTo,
  dateFrom,
  dateType,
  names,
}: DataItemExplorerRequestProps): ApiResponse<T> => {
  const url = `${
    process.env.REACT_APP_MIP_PULL_API_URL || ''
  }/MIPIws-public/public/publicwebservice.asmx`;

  const config: AxiosRequestConfig = {
    baseURL: '',
    url,
    method: 'POST',
    data: getRequestBody(latestFlag, applicableFor, dateTo, dateFrom, dateType, names),
    headers: headers,
  };

  const { isLoading, error, data } = useQuery<T, Error>({
    queryKey: ['dataItemExplorerRequest'],
    queryFn: () => axios.request<T>(config).then(({ data }) => data),
  });

  return { isLoading, error, data };
};
