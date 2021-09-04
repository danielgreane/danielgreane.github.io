import React from "react"
import styled from "styled-components"
import ArtistCarousel from "components/ArtistCarousel"
import { VoltaGrid } from "../theme/components"
import RhymeSo from "../images/upcoming/rhyme_active.png"
import Bishi from "../images/upcoming/Bishi_opac.png"
import ImogenHeap from "../images/upcoming/ImogenHeap.png"
import AmpLive from "../images/upcoming/AmpLive.png"
import DavidPhipps from "../images/upcoming/DavidPhipps.png"
import JohnTejada from "../images/upcoming/JohnTejada.png"

const Wrapper = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing.l};
  text-align: center;
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`

const Heading = styled.h3`
  grid-column: 2/9;
  text-align: left;
  margin-bottom: 64px;
  color: ${({ theme: { colours } }) => colours.primary.white};

  @media (max-width: 970px) {
    grid-column: 2/10;
  }
  @media (max-width: 845px) {
    grid-column: 2/11;
  }
`

const artistArray: {
  imageSrc: string
  imageAlt: string
  name: string
  detail?: string
  href?: string
}[] = [
  {
    imageSrc: ImogenHeap,
    imageAlt: "Imogen Heap",
    name: "Imogen Heap",
    href: "https://www.youtube.com/embed/OenBCfdRtws"
  },
  {
    imageSrc: DavidPhipps,
    imageAlt: "David Phipps",
    name: "David Phipps",
    href: "https://www.youtube.com/embed/ZpZtctWEoxE"
  },
  {
    imageSrc: JohnTejada,
    imageAlt: "John Tejada & C. Cliff",
    name: "John Tejada & C. Cliff",
    href: "https://www.youtube.com/embed/gSVdBSSH56c"
  },
  {
    imageSrc: Bishi,
    imageAlt: "Bishi",
    name: "Bishi",
    href: "https://www.youtube.com/embed/3CzWqtNPiYE"
  },
  {
    imageSrc: RhymeSo,
    imageAlt: "RHYME",
    name: "RHYME",
  },
  {
    imageSrc: AmpLive,
    imageAlt: "Amp Live",
    name: "Amp Live",
  },
]

const RecentArtists = () => {
  return (
    <Wrapper>
      <StyledGrid>
        <Heading>Recent artists performing in Volta Create</Heading>
      </StyledGrid>
      <ArtistCarousel artistArray={artistArray} />
    </Wrapper>
  )
}

export default RecentArtists
