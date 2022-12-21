import axios from 'axios';

const getRequestHandler = <T>(
  url: string,
  queryParams: string,
  callback: (data: T) => void,
  errorCallback: (error: Error) => void
): void => {
  axios
    .get<T>(url + queryParams)
    .then(({ data }) => {
      callback(data);
    })
    .catch((error: Error) => {
      errorCallback(error);
    });
};

export default getRequestHandler;
