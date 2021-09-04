import { Link } from "@reach/router"
import React from "react"
import styled from "styled-components"
import VOLTA from "../icons/VOLTA.png"

const Wrapper = styled.div`
  display: flex;
  height: 162px;
  margin: 0 auto;
  color: #ffffff;
  max-width: 1110px;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-left: 32px;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
  }
`

const Volta = styled.img`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 81px;
  }
`

const WaitlistHeader = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Volta src={VOLTA} />
        </Link>
      </Container>
    </Wrapper>
  )
}

export default WaitlistHeader
