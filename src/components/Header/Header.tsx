import * as Styled from './Header.styles'
import { Timer, Scroll } from 'phosphor-react'

import logo from '../../assets/logoSoul.png'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Styled.Header>
      <img src={logo} />
      <nav>
        <NavLink to="/" title="Tempo">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Styled.Header>
  )
}
