import '@testing-library/jest-dom';

//! To prevent window.matchMedia is not a function error when testing with AntD components
export default global.matchMedia =
  global.matchMedia ||
  function (): unknown {
    return { matches: false, addListener: jest.fn(), removeListener: jest.fn() };
  };
