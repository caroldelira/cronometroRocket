import styled from 'styled-components';

export const TimeContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme['white']};

  display: flex;
  gap: 1rem;

  span {
    background: ${props => props.theme['gray-900']};
    border: 1px solid ${props => props.theme['blue-300']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme['purple-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`