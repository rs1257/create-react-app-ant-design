import '@testing-library/jest-dom';

//! To prevent window.matchMedia is not a function error when testing with AntD components
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

//! To prevent window.ResizeObserver is not a constructor error when testing with recharts
import * as ResizeObserverModule from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserverModule.default;
