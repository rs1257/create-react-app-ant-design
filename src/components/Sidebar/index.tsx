import { ReactElement } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import navRoutes from '../../config/nav-routes';
import { useNavigate } from 'react-router-dom';
import './Sidebar.scss';
import { SidebarProps } from '../../types/props';
const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps): ReactElement => {
  const navigate = useNavigate();

  const handleNavigation: MenuProps['onClick'] = ({ key: route }) => {
    navigate(route);
  };

  const toggleCollapsed = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      className="sidebar"
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      width={300}
      collapsible
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu
        mode="inline"
        className="sidebar__menu"
        defaultSelectedKeys={['/']}
        defaultOpenKeys={['/']}
        onClick={handleNavigation}
        items={navRoutes?.map(({ key, label, children, icon }) => ({
          icon,
          key,
          label,
          children,
        }))}
      />
    </Sider>
  );
};

export default Sidebar;
