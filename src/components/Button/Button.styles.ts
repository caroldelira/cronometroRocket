import styled from 'styled-components'

export const Button = styled.button`
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

  background-color: ${props => props.theme['purple-300']};
  color: ${props => props.theme['gray-200']};

  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${props => props.theme['purple-500']};
  }
`
