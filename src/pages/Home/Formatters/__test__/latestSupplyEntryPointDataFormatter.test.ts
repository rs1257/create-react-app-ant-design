import { getFormattedSystemEntryPointsData } from '../latestSupplyEntryPointDataFormatter';

describe('Latest Supply Entry Point Data Formatter', () => {
  it('should return object with empty arrays/objects when data is not present', () => {
    expect(getFormattedSystemEntryPointsData(undefined)).toEqual({
      data: [],
      headers: [],
      meta: {},
    });
  });
});
