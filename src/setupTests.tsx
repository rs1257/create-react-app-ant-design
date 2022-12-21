import '@testing-library/jest-dom';

//! To prevent window.matchMedia is not a function error when testing with AntD components
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

//! Set a default width and height to the ResponsiveContainer to ensure that its content is rendered correctly
import recharts from 'recharts';
import { ReactNode } from 'react';
interface MockResponsiveContainer {
  children: ReactNode;
}

jest.mock('recharts', () => {
  const OriginalRechartsModule: jest.Mocked<typeof recharts> = jest.requireActual('recharts');

  return {
    ...OriginalRechartsModule,

    ResponsiveContainer: ({ children }: MockResponsiveContainer) => (
      <div className="recharts-responsive-container" style={{ width: 500, height: 500 }}>
        {children}
      </div>
    ),
  } as jest.Mocked<typeof recharts>;
});

import { server } from './mocks/server';
import { client } from './mockQueryClient';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  client.clear();
});

// Clean up after the tests are finished.
afterAll(() => server.close());
