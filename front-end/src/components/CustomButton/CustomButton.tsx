import * as React from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
  hasError?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isLoading = false,
  loadingText = 'Loading...',
  hasError = false,
  disabled,
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !isLoading && !hasError && onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      disabled={disabled || isLoading || hasError}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? loadingText : children}
    </Button>
  );
};

export default CustomButton;
