import React from "react"
import styled from "styled-components"
import events from "../images/visual_events.png"

const Wrapper = styled.div`
  height: 822px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: 805px;
  }
`

const Inner = styled.div`
  width: 779px;
  text-align: left;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 100vw;
  }
`

const Image = styled.div`
  background-image: url(${events});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 779px;
  height: 422px;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    width: 779px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: 423px;
  }
`

const ImageWrapper = styled.div`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
    margin: 0 32px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2:not(:last-of-type) {
    margin-right: 12px;
  }

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
  }
`

const ImageText = styled.h2`
  font-family: "SharpGrotesk-Bold25";
  font-size: 48px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 32px;
  }
  line-height: 0;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const H4 = styled.h4`
  color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 0 32px;
    align-self: left;
  }
`

const TopText = styled(H4)`
  font-size: 48px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 24px;
  }
  margin-top: 120px;
  margin-bottom: 32px;
`
const MiddleText = styled(H4)`
  margin-top: 32px;
  margin-bottom: 12px;
`

const UpcomingEvents = () => {
  return (
    <Wrapper>
      <Inner>
        <TopText>Our Next Event</TopText>
      </Inner>
      <a href="/performances">
        <ImageWrapper>
          <Image>
            <TextWrapper>
              <ImageText>Volta</ImageText>
              <ImageText>x</ImageText>
              <ImageText>Boiler Room</ImageText>
            </TextWrapper>
            <ImageText>Sept 4</ImageText>
          </Image>
        </ImageWrapper>
      </a>
      <a href="/performances">
        <Inner>
          <MiddleText>View details</MiddleText>
        </Inner>
      </a>
    </Wrapper>
  )
}

export default UpcomingEvents
