import { Button } from 'antd';
import { CustomButtonProps } from '../../types/props';

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
