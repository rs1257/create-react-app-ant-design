import { RestHandler, MockedRequest, DefaultBodyType, rest } from 'msw';

export const setupFailedNetworkRequest = (
  url: string,
  statusCode: number
): RestHandler<MockedRequest<DefaultBodyType>> => {
  return rest.get(url, (req, res, ctx) => {
    return res(ctx.status(statusCode));
  });
};
