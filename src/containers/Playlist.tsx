import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import VideoCarousel from "components/VideoCarousel"

const Wrapper = styled.div`
  color: ${({ theme: { colours } }) => colours.primary.white};
  padding: 112px 0;
`
const StyledGrid = styled(VoltaGrid)``
const Heading = styled.h3`
  grid-column: 1/13;
  margin: 0;
  margin-bottom: 40px;
`

const PlaylistArray = [
  {
    videoId: "1Umm8GihjnM",
    alt: "Introduction and the basics",
    modulePath: "module-1",
  },
  {
    videoId: "nFLenu0SMbA",
    alt: "Connecting to Ableton",
    modulePath: "rig/ableton",
  },
  {
    videoId: "JGoX2nkhkqk",
    alt: "Connecting to Traktor",
    modulePath: "rig/traktor",
  },
  {
    videoId: "psozWFyITuk",
    alt: "Connecting Volta to generic MIDI/DAW/CDJs",
    modulePath: "rig/midi-daw-cdj",
  },
  {
    videoId: "UXGkx9Z-BIQ",
    alt: "Creative Basics",
    modulePath: "module-3"
  },
  {
    videoId: "m4JmNZUWefA",
    alt: "Special Elements",
    modulePath: "module-4"
  }
]

const Playlist = () => {
  return (
    <Wrapper>
      <StyledGrid>
        <Heading>Browse all tutorials</Heading>
      </StyledGrid>
      <VideoCarousel youtubeIdArray={PlaylistArray}/>
    </Wrapper>
  )
}

export default Playlist
