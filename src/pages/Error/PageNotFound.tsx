import { Alert } from 'antd';

const PageNotFound = (): JSX.Element => {
  return <Alert message="Error" description="404: Page not found" type="error" banner />;
};

export default PageNotFound;
