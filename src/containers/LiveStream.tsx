import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import thumb from "../images/upcoming/rhyme_active.png"

const Wrapper = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    height: 100%;
  }
  padding-top: 215px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
  }

`

const VideoStream = styled.iframe`
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    width: 100%;
    height: 100%;
  }
`

const StreamWrapper = styled.div`
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    width: 100%;
    height: 730px;
    grid-column: 1/13;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
  }
`

const VideoCaption = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: flex-start;
`

const Heading = styled.body`
  color: #ffffff;
  margin: 0;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 10px;
  }
`

const ArtistName = styled.h3`
  color: #ffffff;
  margin: 0;
`

const TextWrapper = styled.div`
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  padding-left: 25px;
  margin-top: 20px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    justify-content: center;
  }
`

const Thumb = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
`

const LiveStream = () => {
  return (
    <Wrapper>
      <StreamWrapper>
        <VideoStream
          scrolling="no"
          src="https://www.youtube.com/embed/esX4P6D1N3o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></VideoStream>
      </StreamWrapper>
      <VideoCaption>
        <Thumb src={thumb} alt="RHYME" />
        <TextWrapper>
          <Heading>Recent Performance</Heading>
          <ArtistName>RHYME</ArtistName>
        </TextWrapper>
      </VideoCaption>
    </Wrapper>
  )
}

export default LiveStream
