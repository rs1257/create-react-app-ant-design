import { getFormattedForecastMarginsData } from '../forecastMarginsDataFormatter';

describe('Forecast Supply Demand Data Formatter', () => {
  it('should return object with empty arrays/objects when data is not present', () => {
    expect(getFormattedForecastMarginsData(undefined)).toEqual({ data: [], headers: [], meta: {} });
  });
});
