import TextButton from "components/Button/text-button"
import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"

import discord from "../icons/discord.png"

const Wrapper = styled.div`
  text-align: center;
  padding: 140px 0 180px;
  background-color: ${({ theme: { colours } }) => colours.primary.black};
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const SocialIcon = styled.img`
  height: 85px;
`

const Heading = styled.h3`
  color: ${({ theme: { colours } }) => colours.primary.white};
  grid-column: 3/11;
`

const Sub = styled.body`
  color: white;
  grid-column: 4/10;
  margin-bottom: 32px;
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin: 32px 0;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    margin: 32px 0;
  }
`

const ButtonWrapper = styled.div`
  min-width: 275px;
  grid-column: 5/9;
  align-self: center;
`

const JoinDiscord = () => {
  return (
    <Wrapper>
      <SocialIcon src={discord} />
      <StyledGrid>
        <Heading>
          Join our community <br></br> on Discord
        </Heading>
        <Sub>
          The place to ask a question, share ideas and give feedback to help to
          make Volta better
        </Sub>
        <ButtonWrapper>
          <TextButton
            text="Join now"
            to="https://discord.gg/R9aYJ6rNtJ"
          ></TextButton>
        </ButtonWrapper>
      </StyledGrid>
    </Wrapper>
  )
}

export default JoinDiscord
