import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import TextButton from "components/Button/text-button"
import packshot from "../images/packshot_6.png"
import ContentCarousel from "components/ContentCarousel"

const Wrapper = styled.div`
  text-align: right;
  padding-bottom: 100px;
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`
const CarouselGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`

const Heading = styled.h2`
  grid-column: 3/10;
  text-align: left;
  margin-top: 120px;
  margin-bottom: 0;
  color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 64px;
  }
`

const Sub = styled.p`
  margin-top: 0;
  text-align: left;
  grid-column: 6/10;
  color: ${({ theme: { colours } }) => colours.primary.white};
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin: 32px 0;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    margin: 32px 0;
  }
`

const HeadingTwo = styled.h3`
  grid-column: 3/10;
  text-align: left;
  margin-top: 64px;
  margin-bottom: 0;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const SubTwo = styled(Sub)`
  grid-column: 6/10;
  margin-bottom: 20px;
`

const Image = styled.img`
  margin-top: 130px;
  display: inline-block;
  grid-column: 1/13;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
  }
`

const MobileImage = styled.img`
  display: none;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: inline-block;
    text-align: right;
    align-self: flex-end;
    width: calc(100vw + 135px);
    margin-right: -135px;
    margin-top: 122px;
  }
`
const SyncContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 3/10;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
const SyncHeading = styled.h5`
  color: ${({ theme: { colours } }) => colours.primary.white};
  text-align: left;
  font-weight: 700;
  grid-column: 3/5;
`
const SyncText = styled.p`
  color: ${({ theme: { colours } }) => colours.primary.white};
  grid-column: 6/10;
  text-align: left;
`
const ButtonWrapper = styled.div`
  min-width: 388px;
  grid-column: 3/6;
  align-self: center;
  margin-top: 60px;
  margin-bottom: 160px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    min-width: 333px;
  }
`

const Vision = () => {
  return (
    <Wrapper>
      <StyledGrid>
        <Heading>
          Design, perform and stream your own mixed reality experience in just minutes
        </Heading>
        <Sub>
          Designing high quality, engaging XR content has never been easier. Just plug it into your existing set-up and stream directly to YouTube, Twitch, TikTok and more with a click of a button!
        </Sub>
        <Image src={packshot} />
      </StyledGrid>

      <MobileImage src={packshot} />
      <StyledGrid>
        <HeadingTwo>
          The Mixed reality tool within your reach
        </HeadingTwo>
        <SubTwo>
          Create your own real-time, interactive performances directly from your bedroom, studio, venue delivering supercharged experiences to your audience!
        </SubTwo>

        <SyncContainer>
          <SyncHeading>Syncs with</SyncHeading>
          <SyncText>
            Abelton, Traktor, OSC, Rekordbox, Serato and more to come!
          </SyncText>
        </SyncContainer>
        <ButtonWrapper>
          <TextButton text="Download for free" to="/signup" />
        </ButtonWrapper>
      </StyledGrid>
      <CarouselGrid>
        <ContentCarousel />
      </CarouselGrid>
    </Wrapper>
  )
}

export default Vision
