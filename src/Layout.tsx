import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 40px 0 40px;
`

interface props {
  children: ReactNode
}

const Layout: FC<props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
