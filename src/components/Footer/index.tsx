import { ReactElement } from 'react';
import { Layout } from 'antd';
import styles from './Footer.module.scss';

const { Footer } = Layout;

const PageFooter = (): ReactElement => {
  const year = new Date().getFullYear();
  return <Footer className={styles.footer}>National Grid ©{year}</Footer>;
};

export default PageFooter;
