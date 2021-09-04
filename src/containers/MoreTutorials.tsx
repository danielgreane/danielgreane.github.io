import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import VideoGrid from "../components/VideoGrid"
import { VideoArrayProps } from "../components/VideoCarousel"

const StyledGrid = styled(VoltaGrid)`
  color: ${({ theme: { colours } }) => colours.primary.white};
  padding: 96px 0 135px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-top: 47px;
    display: flex;
    flex-direction: column;
  }
`
const Heading = styled.h3`
  grid-column: 1/13;
  margin: 0;
  margin-bottom: 40px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 0;
  }
`
const StyledVideoGrid = styled(VideoGrid)`
  grid-column: 1/13;
`

const MoreTutorials = ({ youtubeIdArray }: VideoArrayProps) => {
  return (
    <StyledGrid>
      <Heading>Browse all tutorials</Heading>
      <StyledVideoGrid youtubeIdArray={youtubeIdArray} />
    </StyledGrid>
  )
}

export default MoreTutorials
