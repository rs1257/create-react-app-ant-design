import { useQuery } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';

interface RequestProps {
  latestFlag: boolean;
  applicableFor: boolean;
  dateTo: string;
  dateFrom: string;
  dateType: SoapRequestDateType;
  names: string[];
}

type RequestResponse = {
  isLoading: boolean;
  error: unknown;
  data?: string;
};

export enum SoapRequestDateType {
  gas = 'GASDAY',
  normal = 'NORMALDAY',
}

export const getRequestBody = (
  latestFlag: boolean,
  applicableFor: boolean,
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
            <LatestFlag>${latestFlag ? 'Y' : 'N'}</LatestFlag>
            <ApplicableForFlag>${applicableFor ? 'Y' : 'N'}</ApplicableForFlag>
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

export function useDataItemExplorerRequest({
  latestFlag,
  applicableFor,
  dateTo,
  dateFrom,
  dateType,
  names,
}: RequestProps): RequestResponse {
  const url = 'http://mip-prdpull-api.azurewebsites.net/MIPIws-public/public/publicwebservice.asmx';

  const config: AxiosRequestConfig = {
    baseURL: '',
    url,
    method: 'POST',
    data: getRequestBody(latestFlag, applicableFor, dateTo, dateFrom, dateType, names),
    headers: headers,
  };

  const { isLoading, error, data } = useQuery<string>({
    queryKey: ['dataItemExplorerRequest'],
    queryFn: () => axios.request(config).then((response) => response.data as string),
  });

  return { isLoading, error, data };
}
