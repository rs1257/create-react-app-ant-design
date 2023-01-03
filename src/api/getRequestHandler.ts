import axios, { AxiosError } from 'axios';

type RequestError = {
  errors: {
    message: string;
  }[];
};

const getRequestHandler = async <T>(
  url: string,
  queryParams: string,
  callback: (data: T) => void,
  errorCallback: (error: Error) => void
): Promise<void> => {
  try {
    const data = await axios.get<T>(url + queryParams);
    if (data?.data) {
      callback(data.data);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      errorCallback(error as AxiosError<RequestError>);
    }
  }
};

export default getRequestHandler;
