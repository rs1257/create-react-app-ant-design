import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import './Navbar.scss';

const { Header } = Layout;

const Navbar = (): ReactElement => {
  return (
    <Header className="navbar">
      <Menu
        mode="horizontal"
        className="navbar__menu"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
  );
};

export default Navbar;
