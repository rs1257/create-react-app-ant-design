import { useQuery } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '../../types/api';

const headers = {
  SOAPAction: 'http://www.NationalGrid.com/EDP/UI/GetInstantaneousFlowData',
  'Content-Type': 'text/xml; charset=utf-8',
};

const requestBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <GetInstantaneousFlowData xmlns="http://www.NationalGrid.com/EDP/UI/" />
        </soap:Body>
    </soap:Envelope>`;

export const useInstantaneousFlowsRequest = <T>(): ApiResponse<T> => {
  const url = `${
    process.env.REACT_APP_MIP_PULL_API_URL || ''
  }/EDP-PublicUI/PublicPI/InstantaneousFlowWebService.asmx`;

  const config: AxiosRequestConfig = {
    baseURL: '',
    url,
    method: 'POST',
    data: requestBody,
    headers: headers,
  };

  const { isLoading, error, data } = useQuery<T, Error>({
    queryKey: ['instantaneousFlowsRequest'],
    queryFn: () => axios.request<T>(config).then(({ data }) => data),
  });

  return { isLoading, error, data };
};
