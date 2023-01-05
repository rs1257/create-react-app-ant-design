import axios, { AxiosError } from 'axios';

const getRequestHandler = async <T>(
  url: string,
  queryParams: string,
  callback: (data: T) => Promise<void> | void,
  errorCallback: (error: Error) => Promise<void> | void
): Promise<void> => {
  try {
    const { data } = await axios.get<T>(`${url}${queryParams}`);
    await callback(data);
  } catch (error) {
    await errorCallback(error as AxiosError);
  }
};

export default getRequestHandler;
