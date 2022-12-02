import React, { ReactElement } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const PageFooter = (): ReactElement => {
  const year = new Date().getFullYear();
  return <Footer style={{ textAlign: 'center' }}>National Grid ©{year}</Footer>;
};

export default PageFooter;
