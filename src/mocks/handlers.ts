import { rest } from 'msw';
import forecastSupplyDemandData from '../data/forecastSupplyDemand.json';
import withinDayPclp from '../data/withinDayPclp.json';
import storageStockPosition from '../data/storageStockPosition.json';
import forecastMargins from '../data/forecastMargins.json';
import latestSupplyEntryPoint from '../data/latestSupplyEntryPoint.json';
import dataItemExplorerCategoryTree from '../data/dataItemExplorerCategoryTree.json';
import dataItemExplorerFolderTreeInitial from '../data/dataItemExplorerFolderTreeInitial.json';
import dataItemExplorerSoapResponse from '../data/dataItemExplorerSoapResponse';
import instantaneousFlowsSoapResponse from '../data/instantaneousFlowsSoapResponse';

const apiUrl = process.env.REACT_APP_API || '';
const mipPullApiUrl = process.env.REACT_APP_MIP_PULL_API_URL || '';

export const handlers = [
  rest.get(`${apiUrl}/api/WithinDayForecastSupplyAndDemand`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(forecastSupplyDemandData));
  }),

  rest.get(`${apiUrl}/api/WithinDayPclp`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(withinDayPclp));
  }),

  rest.get(`${apiUrl}/api/AnnualStorageStockLevel`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(storageStockPosition));
  }),

  rest.get(`${apiUrl}/api/statusHeader`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(forecastMargins));
  }),

  //TODO - remove 'initial' from end of this url when actually calling the API
  rest.get(`${apiUrl}/api/v2/DataItemCategoryTreeInitial`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataItemExplorerFolderTreeInitial));
  }),

  rest.get(`${apiUrl}/api/v2/DataItemCategoryTree`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataItemExplorerCategoryTree));
  }),

  rest.get(`${apiUrl}/api/LatestSupplyEntryPoint`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(latestSupplyEntryPoint));
  }),

  rest.post(`${mipPullApiUrl}/MIPIws-public/public/publicwebservice.asmx`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.xml(dataItemExplorerSoapResponse));
  }),

  rest.post(
    `${mipPullApiUrl}/EDP-PublicUI/PublicPI/InstantaneousFlowWebService.asmx`,
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.xml(instantaneousFlowsSoapResponse));
    }
  ),

  //* Passthrough all static assets
  rest.get('/static/*', (req) => {
    return req.passthrough();
  }),
  rest.get('/*.png', (req) => {
    return req.passthrough();
  }),
];
