import { server } from '../../mocks/server';
import { setupFailedNetworkRequest } from '../../mocks/testHandlers';
import getRequestHandler from '../getRequestHandler';

describe('get request handler should work as expected', () => {
  const queryParams = '?id=30001';
  const callback = jest.fn();
  const errorCallback = jest.fn();
  const url = `${process.env.REACT_APP_API || ''}/api/v2/DataItemCategoryTree`;

  it('should fire callback function when data successfully fetched from API', async () => {
    await getRequestHandler(url, queryParams, callback, errorCallback);
    expect(callback).toHaveBeenCalled();
  });

  it('should fire error callback function when data unsuccessfully fetched from API', async () => {
    const statusCode = 404;
    server.use(setupFailedNetworkRequest(url, statusCode));
    await getRequestHandler(url, queryParams, callback, errorCallback);
    expect(errorCallback).toHaveBeenCalled();
  });
});
