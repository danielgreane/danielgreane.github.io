import React from "react"
import styled from "styled-components"
import VideoThumbnail from "./VideoThumbnail"

export type VideoArrayObject = {
  videoId: string
  alt: string
  modulePath: string
}

export interface VideoArrayProps {
  youtubeIdArray: VideoArrayObject[]
}

const ScrollContainer = styled.div`
  grid-column: 1/13;
  overflow: scroll;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 1110px) {
    padding-left: calc((100vw - 1110px) / 2);
  }

  ${({ theme: { breakpoints } }) => breakpoints.mobile } {
    margin-left: 32px;
  }
`

const ThumbnailContainer = styled.div`
  margin-right: 32px;
  display: inline-block;
`
const StyledVideoThumbnail = styled(VideoThumbnail)`
  margin-right: 32px;
`

const VideoCarousel = ({youtubeIdArray}: VideoArrayProps) => {
  return (
    <ScrollContainer>
      {youtubeIdArray.map((video, i) => {
        return (
          <ThumbnailContainer key={i}>
            <StyledVideoThumbnail
              videoId={video.videoId}
              alt={video.alt}
              modulePath={video.modulePath}/>
          </ThumbnailContainer>
        )
      })}
    </ScrollContainer>
  )
}

export default VideoCarousel
