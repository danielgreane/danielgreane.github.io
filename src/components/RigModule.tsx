import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import { VideoArrayObject } from "components/VideoCarousel"
import { ModuleHeader } from "containers/TutorialModules"
import VideoGrid from "components/VideoGrid"

interface RigModuleProps {
  number: number
  title: string
  youtubeIdArray: VideoArrayObject[]
}

const StyledGrid = styled(VoltaGrid)`
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  color: ${({ theme: { colours } }) => colours.primary.white};
  margin-bottom: 245px;

  @media (min-width: 768px) and (max-width: 1110px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`

const RigModule = ({
  number,
  title,
  youtubeIdArray
}: RigModuleProps) => {
  return (
    <StyledGrid>
      <ModuleHeader number={number} title={title} />
      <VideoGrid youtubeIdArray={youtubeIdArray} />
    </StyledGrid>
  )
}

export default RigModule
