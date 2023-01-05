import { ReactElement, FC } from 'react';
import { Layout as AntLayout } from 'antd';
import { LayoutTypeProps } from '../../types/props';
import styles from './Layout.module.scss';

const Layout: FC<LayoutTypeProps> = ({
  header,
  footer,
  page,
  sidebar,
  collapsed,
}): ReactElement => {
  return (
    <AntLayout className={styles.outerLayout}>
      <div>{sidebar}</div>
      <AntLayout
        style={{ marginLeft: collapsed ? '80px' : '300px' }}
        className={styles.innerLayout}
      >
        <div>{header}</div>
        <div className={styles.content}>{page}</div>
        <div>{footer}</div>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
