import axios, { AxiosRequestConfig, AxiosError, Method } from 'axios';
import { useState } from 'react';

interface RequestProps<T = unknown> {
  url: string;
  method: Method;
  data?: T;
  onSuccess: (response: unknown) => void;
}

type RequestResponse = {
  doRequest: (data?: unknown) => Promise<void>;
  errors: string[];
};

type RequestError = {
  errors: {
    message: string;
  }[];
};

export function useRequest({ url, method, data, onSuccess }: RequestProps): RequestResponse {
  const [errors, setErrors] = useState<string[]>([]);

  const config: AxiosRequestConfig = {
    baseURL: '',
    url,
    method,
    data,
    headers: {
      //   'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': '*',
    },
    // headers: {
    //
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Access-Control-Allow-Headers': '*',
    //   'Access-Control-Allow-Credentials': '*',
    //   'Access-Control-Allow-Methods': '*',
    // },
  };

  // eslint-disable-next-line no-console
  console.log(config);

  const doRequest = async (data?: unknown): Promise<void> => {
    try {
      setErrors([]);
      if (data) {
        config.data = data;
      }
      const response = await axios.request(config);
      if (onSuccess) {
        onSuccess(response.data as unknown);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<RequestError>;
        if (error && error.response) {
          const errors: string[] = [];
          error.response?.data?.errors?.forEach((item) => errors.push(item.message));
          setErrors(errors);
        }
      } else {
        setErrors(['Unknown Error']);
      }
    }
  };

  return { doRequest, errors };
}
