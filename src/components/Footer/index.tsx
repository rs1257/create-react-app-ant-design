import { ReactElement } from 'react';
import { Layout } from 'antd';
import './Footer.scss';
const { Footer } = Layout;

const PageFooter = (): ReactElement => {
  const year = new Date().getFullYear();
  return <Footer className="footer">National Grid ©{year}</Footer>;
};

export default PageFooter;
