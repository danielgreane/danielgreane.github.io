import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import VideoThumbnail from "./VideoThumbnail"
import { VideoArrayProps } from "./VideoCarousel"

const Wrapper = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: center;
`

const StyledGrid = styled(VoltaGrid)`
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (min-width: 768px) and (max-width: 1110px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`

const VideoGrid = ({ youtubeIdArray }: VideoArrayProps) => {
  return (
    <Wrapper>
      <StyledGrid>
        {youtubeIdArray.map((video, i) => (
          <VideoThumbnail
            key={i}
            videoId={video.videoId}
            alt={video.alt}
            modulePath={video.modulePath}
            width="356px"
            height="200px"
          />
        ))}
      </StyledGrid>
    </Wrapper>
  )
}

export default VideoGrid
