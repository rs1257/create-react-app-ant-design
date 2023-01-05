import { ReactElement } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import navRoutes from '../../config/nav-routes';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';

const { Header } = Layout;

const Navbar = (): ReactElement => {
  const navigate = useNavigate();

  const handleNavigation: MenuProps['onClick'] = ({ key: route }) => {
    navigate(route);
  };

  return (
    <Header className={styles.navbar}>
      <Menu
        mode="horizontal"
        className={styles.menu}
        defaultSelectedKeys={['2']}
        onClick={handleNavigation}
        items={navRoutes?.map(({ label, key }) => {
          return {
            key,
            label,
          };
        })}
      />
    </Header>
  );
};

export default Navbar;
