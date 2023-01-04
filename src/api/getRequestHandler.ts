import axios, { AxiosError } from 'axios';

const getRequestHandler = async <T>(
  url: string,
  queryParams: string,
  callback: (data: T) => void,
  errorCallback: (error: Error) => void
): Promise<void> => {
  try {
    const { data } = await axios.get<T>(`${url}${queryParams}`);
    callback(data);
  } catch (error) {
    errorCallback(error as AxiosError);
  }
};

export default getRequestHandler;
