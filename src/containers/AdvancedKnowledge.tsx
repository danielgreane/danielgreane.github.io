import React from "react"
import styled from "styled-components"
import { VoltaGrid  } from "../theme/components"
import VideoCarousel from "components/VideoCarousel"

const Wrapper = styled.div`
  padding-top: 120px;
`
const StyledGrid = styled(VoltaGrid)`
  color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.mobile } {
    display: flex;
    flex-direction: column;
  }
`
const Heading = styled.h3`
 grid-column: 1/13;
 margin: 0;
`
const Sub = styled.p`
  grid-column: 1/6;
  margin-bottom: 32px;
`

const youtubeIdArray = [
  {
    videoId: "ZpZtctWEoxE",
    alt: "David Phipps",
    modulePath: "module-1",
  },
  {
    videoId: "OenBCfdRtws",
    alt: "Imogen Heap",
    modulePath: "module-2",
  },
  {
    videoId: "gSVdBSSH56c",
    alt: "John Tejada",
    modulePath: "rig",
  },
  {
    videoId: "esX4P6D1N3o",
    alt: "RHYME",
    modulePath: "module-4",
  },
]

const AdvancedKnowledge = () => {
  return (
    <Wrapper>
      <StyledGrid>
        <Heading>Advanced technique videos</Heading>
        <Sub>
          Lorem ipsum dum dum dum dum dum dee dee dum dum dum dum
        </Sub>

      </StyledGrid>
      <VideoCarousel youtubeIdArray={youtubeIdArray} />
    </Wrapper>
  )
}

export default AdvancedKnowledge
