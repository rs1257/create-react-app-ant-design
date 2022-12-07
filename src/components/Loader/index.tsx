import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loader = (): JSX.Element => {
  const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return <Spin tip="Loading..." indicator={loadingIcon} />;
};

export default Loader;
