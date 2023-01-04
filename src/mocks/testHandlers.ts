import { Method } from 'axios';
import { RestHandler, MockedRequest, DefaultBodyType, rest } from 'msw';

export const setupFailedNetworkRequest = (
  url: string,
  statusCode: number,
  method: Method = 'GET'
): RestHandler<MockedRequest<DefaultBodyType>> => {
  switch (method) {
    case 'POST':
      return rest.post(url, (req, res, ctx) => res(ctx.status(statusCode)));
    case 'GET':
      return rest.get(url, (req, res, ctx) => res(ctx.status(statusCode)));
    case 'DELETE':
      return rest.delete(url, (req, res, ctx) => res(ctx.status(statusCode)));
    case 'PATCH':
      return rest.patch(url, (req, res, ctx) => res(ctx.status(statusCode)));
    case 'PUT':
      return rest.put(url, (req, res, ctx) => res(ctx.status(statusCode)));
    case 'OPTIONS':
      return rest.options(url, (req, res, ctx) => res(ctx.status(statusCode)));
    default:
      throw new Error(`Method '${method}' not found`);
  }
};
