import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'

import * as Styled from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <Styled.Container>
      <Header />
      <Outlet />
    </Styled.Container>
  )
}
