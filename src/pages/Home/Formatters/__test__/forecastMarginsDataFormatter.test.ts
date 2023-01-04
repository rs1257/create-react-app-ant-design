import { getFormattedForecastMarginsData } from '../forecastMarginsDataFormatter';

describe('Forecast Margins Data Formatter', () => {
  it('should return object with empty arrays/objects when data is not present', () => {
    expect(getFormattedForecastMarginsData(undefined)).toEqual({ data: [], headers: [], meta: {} });
  });
});
