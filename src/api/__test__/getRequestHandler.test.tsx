import getRequestHandler from '../getRequestHandler';

describe('get request handler should work as expected', () => {
  it('should fire callback function when data successfully fetched from API', async () => {
    const url = `${process.env.REACT_APP_API || ''}/api/v2/DataItemCategoryTree`;
    const queryParams = '?id=30001';
    const callback = jest.fn();
    const errorCallback = jest.fn();

    await getRequestHandler(url, queryParams, callback, errorCallback);
    expect(callback).toHaveBeenCalled();
  });

  it('should fire error callback function when data unsuccessfully fetched from API', async () => {
    const url = `${process.env.REACT_APP_API || ''}/api/v2/DataItemCategory`;
    const queryParams = '?i=30002';
    const callback = jest.fn();
    const errorCallback = jest.fn();

    await getRequestHandler(url, queryParams, callback, errorCallback);
    expect(errorCallback).toHaveBeenCalled();
  });
});
