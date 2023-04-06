import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['white']};
  font-size: 1rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

const InputBase = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['pink-100']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${props => props.theme['gray-100']};

  &:focus {
    box-shadow: 0 0 0 0;
    border-bottom: 2px solid ${props => props.theme['blue-300']};
  }
`

export const InputText = styled(InputBase)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const InputNumber = styled(InputBase)`
  width: 4rem;
`