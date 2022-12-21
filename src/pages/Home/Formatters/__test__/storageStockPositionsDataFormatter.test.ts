import { storageStockPositionGraphDataFormatter } from '../storageStockPositionDataFormatter';

describe('Storage Stock Positions Data Formatter', () => {
  it('should return object with empty arrays when data is not present', () => {
    expect(storageStockPositionGraphDataFormatter()).toEqual({ current: [], previous: [] });
  });
});
