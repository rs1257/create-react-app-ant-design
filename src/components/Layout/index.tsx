import { ReactElement, ReactNode, FC } from 'react';
import { Layout as AntLayout } from 'antd';
import './layout.scss';

type LayoutType = {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  collapsed?: boolean;
  page: ReactNode;
};

const Layout: FC<LayoutType> = ({ header, footer, page, sidebar, collapsed }): ReactElement => {
  return (
    <AntLayout className="outer-layout">
      <div>{sidebar}</div>
      <AntLayout
        style={{ marginLeft: collapsed ? '80px' : '300px' }}
        className="outer-layout__inner-layout"
      >
        <div>{header}</div>
        <div className="outer-layout__inner-layout__content">{page}</div>
        <div>{footer}</div>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
