import React from "react"
import styled from "styled-components"
import TextButton from "../components/Button/text-button"

interface NextUpProps {
  number?: number
  title?: string
}

const Wrapper = styled.div`
  color: ${({ theme: { colours } }) => colours.primary.white};
  background-color: ${({ theme: { colours } }) => colours.secondary.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 140px 0;
  text-align: center;
`
const Heading = styled.h4``
const Title = styled.h3`
  margin: 0;
  max-width: 66%;
`

const ButtonWrapper = styled.div`
  margin-top: 48px;
  width: 240px;
`
const ButtonWrapper2 = styled.div`
  margin-top: 48px;
  width: 373px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 325px;
  }
`

const NextUp = ({ number, title }: NextUpProps) => {
  return (
    <Wrapper>
      {number && title ? (
        <>
          <Heading>Next up</Heading>
          <Title>Module {number}</Title>
          <Title>{title}</Title>
          <ButtonWrapper>
            <TextButton text="Watch" to={`/tutorials/module-${number}`} />
          </ButtonWrapper>
        </>
      ) : (
        <>
          <Heading>All Set!</Heading>
          <Title>
            Now access these videos and our other advanced tutorials any time
          </Title>
          <ButtonWrapper2>
            <TextButton text="View all tutorials" to={"/tutorials"} />
          </ButtonWrapper2>
        </>
      )}
    </Wrapper>
  )
}

export default NextUp
