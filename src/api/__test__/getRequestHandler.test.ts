import getRequestHandler from '../getRequestHandler';

describe('get request handler should work as expected', () => {
  const queryParams = '?id=30001';
  const callback = jest.fn();
  const errorCallback = jest.fn();
  it('should fire callback function when data successfully fetched from API', async () => {
    const url = `${process.env.REACT_APP_API || ''}/api/v2/DataItemCategoryTree`;
    await getRequestHandler(url, queryParams, callback, errorCallback);
    expect(callback).toHaveBeenCalled();
  });

  it('should fire error callback function when data unsuccessfully fetched from API', async () => {
    const incorrectUrl = `${process.env.REACT_APP_API || ''}/api/v2/DataItemCategory`;
    await getRequestHandler(incorrectUrl, queryParams, callback, errorCallback);
    expect(errorCallback).toHaveBeenCalled();
  });
});
