import { useLocation } from 'react-router-dom';

const Test = (): JSX.Element => {
  const { pathname } = useLocation();

  return <div>Test - path: {pathname}</div>;
};

export default Test;
