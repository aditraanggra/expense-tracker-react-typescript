import React from 'react'
import styled from 'styled-components'

const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0 15px 0;
`

const Title = styled.h3`
  font-size: 1.35em;
  font-weight: 500;
  color: #e9e8e8;
  margin: 0;
`

const BalanceAmount = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  color: MediumSeaGreen;
  margin: 10px 0 0 0;
`

interface BalanceProps {
  title: string
  balance: number
}

const Balance: React.FC<BalanceProps> = ({ title, balance }) => {
  return (
    <BalanceWrapper>
      <Title>{title}</Title>
      <BalanceAmount>$ {balance}.00</BalanceAmount>
    </BalanceWrapper>
  )
}

export default Balance
