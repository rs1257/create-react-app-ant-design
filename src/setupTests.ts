import '@testing-library/jest-dom';
import * as ResizeObserverModule from 'resize-observer-polyfill';

//! To prevent window.matchMedia is not a function error when testing with AntD components
export default global.matchMedia =
  global.matchMedia ||
  function (): unknown {
    return { matches: false, addListener: jest.fn(), removeListener: jest.fn() };
  };

// TODO is there a better way to do this?
//! To prevent window.ResizeObserver is not a constructor error when testing with recharts
global.ResizeObserver = ResizeObserverModule.default;
