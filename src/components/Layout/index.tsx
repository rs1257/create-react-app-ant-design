import { ReactElement, ReactNode, FC } from 'react';
import { Layout as AntLayout } from 'antd';
import './layout.scss';

type LayoutType = {
  header?: ReactNode;
  footer?: ReactNode;
  page: ReactNode;
};

const Layout: FC<LayoutType> = ({ header, footer, page }): ReactElement => {
  return (
    <AntLayout className="layout">
      <div>{header}</div>
      <div className="layout__content">{page}</div>
      <div>{footer}</div>
    </AntLayout>
  );
};

export default Layout;
