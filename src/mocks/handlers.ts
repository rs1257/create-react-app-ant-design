import { rest } from 'msw';
import forecastSupplyDemandData from '../data/forecastSupplyDemand.json';
import withinDayPclp from '../data/withinDayPclp.json';
import storageStockPosition from '../data/storageStockPosition.json';
import forecastMargins from '../data/forecastMargins.json';
import latestSupplyEntryPoint from '../data/latestSupplyEntryPoint.json';
import dataItemExplorerCategoryTree from '../data/dataItemExplorerCategoryTree.json';
import dataItemExplorerFolderTreeInitial from '../data/dataItemExplorerFolderTreeInitial.json';
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

  rest.get('https://mip-prd-web.azurewebsites.net/api/StatusHeader', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(forecastMargins));
  }),

  //TODO - remove 'initial' from end of this url when actually calling the API
  rest.get(
    'https://mip-prd-web.azurewebsites.net/api/v2/DataItemCategoryTreeInitial',
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(dataItemExplorerFolderTreeInitial));
    }
  ),

  rest.get('https://mip-prd-web.azurewebsites.net/api/v2/DataItemCategoryTree', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataItemExplorerCategoryTree));
  }),

  rest.get('https://mip-prd-web.azurewebsites.net/api/LatestSupplyEntryPoint', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(latestSupplyEntryPoint));
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
