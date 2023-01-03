import { getFormattedSystemEntryPointsData } from '../latestSupplyEntryPointDataFormatter';

describe('Forecast Supply Demand Data Formatter', () => {
  it('should return object with empty arrays/objects when data is not present', () => {
    expect(getFormattedSystemEntryPointsData(undefined)).toEqual({
      data: [],
      headers: [],
      meta: {},
    });
  });
});
