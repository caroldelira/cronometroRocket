import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 70px;
  }
  
  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${props => props.theme.white};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:focus {
        box-shadow: 0 0 0 0;
      }

      &:hover {
        border-bottom: 3px solid ${props => props.theme['pink-300']};
      }

      &.active {
        color: ${props => props.theme['blue-100']};
      }
    }
  }
`
