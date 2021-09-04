import React from "react"
import styled from "styled-components"
import SignupInput from "components/SignupInput"
import { VoltaGrid } from "../theme/components"

interface NewsletterSignupProps {
  heading: string
  body: string
}

const Wrapper = styled.div`
  background-color: ${({ theme: { colours } }) => colours.secondary.darkGrey};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    background-color: ${({ theme: { colours } }) => colours.primary.background};
  }
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`

const Header = styled.h4`
  color: white;
  text-align: left;
  grid-column: 2/8;
  margin-bottom: 0;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    margin-top: 120px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 64px;
  }
`

const Sub = styled.body`
  color: white;
  text-align: left;
  grid-column: 2/10;
  background-color: transparent;
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin: 32px 0;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    margin: 32px 0;
  }
`

const InputWrapper = styled.div`
  grid-column: 2/12;
  margin-bottom: 100px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 100px;
  }
`

const NewsletterSignup = ({ heading, body }: NewsletterSignupProps) => {
  return (
    <Wrapper>
      <StyledGrid>
        <Header>{heading}</Header>
        <Sub>{body}</Sub>
        <InputWrapper>
          <SignupInput />
        </InputWrapper>
      </StyledGrid>
    </Wrapper>
  )
}

export default NewsletterSignup
