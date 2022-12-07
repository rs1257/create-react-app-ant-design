import { ButtonType } from 'antd/es/button';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ReactNode } from 'react';

//** Components

export interface CustomButtonProps {
  size?: SizeType;
  type?: ButtonType;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export type LinkButtonProps = {
  size?: SizeType;
  href: string;
  target?: string;
  children: ReactNode;
};

export interface DateRangePickerProps {
  dateRange?: [string, string] | null;
  setDateRange: (date: [string, string]) => void;
}

//** Pages
