import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-200']}
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const TimeContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme['gray-200']};

  display: flex;
  gap: 1rem;

  span {
    background: ${props => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme['purple-300']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const InputBase = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${props => props.theme['purple-300']};

  &:focus {
    box-shadow: 0 0 0 0;
    border-bottom: 2px solid ${props => props.theme['purple-300']};
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
