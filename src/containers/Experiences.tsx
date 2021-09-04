import React from "react"
import styled from "styled-components"
import ArtistCarousel from "../components/ArtistCarousel"
import voltaDemo from "../images/upcoming/VoltaDemo.png"
import Bishi from "../images/upcoming/Bishi_opac.png"
import ImogenHeap from "../images/upcoming/ImogenHeap.png"
import AmpLive from "../images/upcoming/AmpLive.png"
import RhymeSo from "../images/upcoming/rhyme_active.png"
import Priestess from "../images/priestess.png"
import DavidPhipps from "../images/upcoming/DavidPhipps.png"
import JohnTejada from "../images/upcoming/JohnTejada.png"

const Wrapper = styled.div`
  position: relative;
  padding-top: 120px;
  overflow: hidden;
  text-align: left;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    overflow: hidden;
  }
`

const Heading = styled.h3`
  color: ${({ theme: { colours } }) => colours.primary.white};
  margin: 0 0 64px;

  @media (min-width: 1110px) {
    margin: 0 calc((100vw - 1110px) / 2) 64px;
  }

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-left: 32px;
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
    imageSrc: DavidPhipps,
    imageAlt: "David Phipps",
    name: "David Phipps",
    detail: "Watch past performance",
    href: "https://www.youtube.com/embed/ZpZtctWEoxE",
  },
  {
    imageSrc: ImogenHeap,
    imageAlt: "Imogen Heap",
    name: "Imogen Heap",
    detail: "Watch past performance",
    href: "https://www.youtube.com/embed/OenBCfdRtws"
  },
  {
    imageSrc: JohnTejada,
    imageAlt: "John Tejada",
    name: "John Tejada & C. Cliff",
    detail: "Watch past performance",
    href: "https://www.youtube.com/embed/gSVdBSSH56c",
  },
  {
    imageSrc: RhymeSo,
    imageAlt: "RHYME",
    name: "RHYME",
    detail: "Watch past performance",
    href: "https://www.youtube.com/embed/esX4P6D1N3o",
  },
  {
    imageSrc: Bishi,
    imageAlt: "Bishi",
    name: "Bishi",
    detail: "Watch past performance",
    href: "https://www.youtube.com/embed/LTxTpPqI8kc",
  },
  {
    imageSrc: voltaDemo,
    imageAlt: "Alex Kane",
    name: "Alex Kane",
    detail: "Watch past performance",
    href: "https://www.youtube.com/embed/e4f1hVNt9LY",
  },
  {
    imageSrc: Priestess,
    imageAlt: "Priestess",
    name: "Priestess",
    detail: "Watch past performance",
    href: "https://www.youtube.com/embed/mrM3a8QKQWw",
  },
  {
    imageSrc: AmpLive,
    imageAlt: "Amp Live",
    name: "Amp Live",
    detail: "Day/Time TBD",
  }
]

const Experiences = () => {
  return (
    <Wrapper>
      <Heading>Past experiences</Heading>
      <ArtistCarousel artistArray={artistArray} />
    </Wrapper>
  )
}

export default Experiences
