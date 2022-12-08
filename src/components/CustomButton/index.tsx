import { Button } from 'antd';
import { CustomButtonProps } from '../../types/props';
import './CustomButton.scss';

const CustomButton = ({
  type = 'default',
  size = 'large',
  disabled = false,
  icon = null,
  danger = false,
  onClick,
  children,
}: CustomButtonProps): JSX.Element => {
  return (
    <Button
      className="custom-button"
      icon={icon}
      type={type}
      size={size}
      onClick={onClick}
      danger={danger}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
