import { Button } from 'antd';
import { LinkButtonProps } from '../../types/props';
import styles from './LinkButton.module.scss';

const LinkButton = ({ size = 'large', href, target, children }: LinkButtonProps): JSX.Element => {
  return (
    <Button className={styles.linkButton} type="link" size={size} href={href} target={target}>
      {children}
    </Button>
  );
};

export default LinkButton;
