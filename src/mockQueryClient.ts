import { QueryClient } from '@tanstack/react-query';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: (): void => {
      undefined;
    },
    warn: (): void => {
      undefined;
    },
    error: (): void => {
      undefined;
    },
  },
});
