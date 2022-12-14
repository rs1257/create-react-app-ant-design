export const roundNumber = (value: string, decimalPlaces = 2): string =>
  parseFloat(String(value)).toFixed(decimalPlaces);
