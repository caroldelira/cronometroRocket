import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  min-height: 40rem;
  margin: 2rem auto;
  padding: 2.5rem;

  background: ${props => props.theme['gray-800']};
  border: 2px solid ${props => props.theme['blue-500']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
