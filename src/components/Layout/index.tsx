import { ReactElement, FC } from 'react';
import { Layout as AntLayout } from 'antd';
import './layout.scss';
import { LayoutTypeProps } from '../../types/props';

const Layout: FC<LayoutTypeProps> = ({
  header,
  footer,
  page,
  sidebar,
  collapsed,
}): ReactElement => {
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
