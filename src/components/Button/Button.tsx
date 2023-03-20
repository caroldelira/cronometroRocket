import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as Styled from './Button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: ReactNode
}

export function Button({ label, icon, ...props }: ButtonProps) {
  return (
    <Styled.Button {...props}>
      {icon && <span>{icon}</span>}
      {label}
    </Styled.Button>
  )
}
