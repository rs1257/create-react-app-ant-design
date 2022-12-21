import { withinDayPclpDataFormatter } from '../withinDayPclpDataFormatter';

describe('Within Day Pclp Data Formatter', () => {
  it('should return an empty array when data is not present', () => {
    expect(withinDayPclpDataFormatter()).toEqual([]);
  });
});
