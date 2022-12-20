import { rest } from 'msw';
import forecastSupplyDemandData from '../data/forecastSupplyDemand.json';
import withinDayPclp from '../data/withinDayPclp.json';
import storageStockPosition from '../data/storageStockPosition.json';
import soapResponse from '../data/soapResponse';

export const handlers = [
  rest.get(
    'https://mip-prd-web.azurewebsites.net/api/WithinDayForecastSupplyAndDemand',
    (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(forecastSupplyDemandData)
      );
    }
  ),

  rest.get('https://mip-prd-web.azurewebsites.net/api/WithinDayPclp', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(withinDayPclp)
    );
  }),

  rest.get('https://mip-prd-web.azurewebsites.net/api/AnnualStorageStockLevel', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(storageStockPosition)
    );
  }),

  rest.post(
    'http://mip-prdpull-api.azurewebsites.net/MIPIws-public/public/publicwebservice.asmx',
    (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.xml(soapResponse)
      );
    }
  ),

  // Passthrough all static assets
  rest.get('/static/*', (req) => {
    return req.passthrough();
  }),
  rest.get('/logo192.png', (req) => {
    return req.passthrough();
  }),
];
