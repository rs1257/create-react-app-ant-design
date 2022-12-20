import { rest } from 'msw';
import forecastSupplyDemandData from '../data/forecastSupplyDemand.json';
import withinDayPclp from '../data/withinDayPclp.json';
import storageStockPosition from '../data/storageStockPosition.json';
import soapResponse from '../data/soapResponse';

export const handlers = [
  rest.get(
    'https://mip-prd-web.azurewebsites.net/api/WithinDayForecastSupplyAndDemand',
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(forecastSupplyDemandData));
    }
  ),

  rest.get('https://mip-prd-web.azurewebsites.net/api/WithinDayPclp', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(withinDayPclp));
  }),

  rest.get('https://mip-prd-web.azurewebsites.net/api/AnnualStorageStockLevel', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(storageStockPosition));
  }),

  rest.post(
    'http://mip-prdpull-api.azurewebsites.net/MIPIws-public/public/publicwebservice.asmx',
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.xml(soapResponse));
    }
  ),

  // Passthrough all static assets
  rest.get('/static/*', (req) => {
    return req.passthrough();
  }),
  rest.get('/*.png', (req) => {
    return req.passthrough();
  }),
];
