import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as Styled from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  variant: 'start' | 'stop';
}

export function Button({ label, icon, variant, ...props }: ButtonProps) {
  return (
    <Styled.BaseButton variant={variant} {...props}>
      {icon && <span>{icon}</span>}
      {label}
    </Styled.BaseButton>
  );
}
