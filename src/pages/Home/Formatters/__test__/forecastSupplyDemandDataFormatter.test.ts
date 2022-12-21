import { forecastSupplyDemandDataFormatter } from '../forecastSupplyDemandDataFormatter';

describe('Forecast Supply Demand Data Formatter', () => {
  it('should return object with empty arrays when data is not present', () => {
    expect(forecastSupplyDemandDataFormatter()).toEqual({ supply: [], demand: [] });
  });
});
