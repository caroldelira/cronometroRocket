import styled from 'styled-components'

interface ButtonProps {
  variant: 'start' | 'stop';
}

const variant = {
  start: `
        background-color: #B51E9A;

        &:not(:disabled):hover {
          background-color: #881F76;
        }
  `,
  
  stop: `
        background-color: #F03847;

        &:hover {
          background-color: #7A1921;
        }
  `,
};

export const BaseButton = styled.button<ButtonProps>`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
 
  color: ${props => props.theme['gray-200']};

  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${(props) => variant[props.variant]};
`;






