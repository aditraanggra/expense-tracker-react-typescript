import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  padding: 10px 0 5px 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${rgba(233, 232, 232, 0.37)};
`

const Title = styled.h3`
  font-size: 1.25em;
  font-weight: 500;
  color: #e9e8e8;
`

const Header: React.FC = () => {
  return (
    <>
      <HeaderWrapper>
        <Title>Expense Tracker</Title>
      </HeaderWrapper>
    </>
  )
}

export default Header
