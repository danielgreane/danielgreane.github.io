import React from "react"
import styled from "styled-components"

interface ArtistCarouselProps {
  imageSrc: string
  imageAlt: string
  name: string
  detail?: string
  href?: string
}

const ScrollContainer = styled.div`
  grid-column: 0/12;
  overflow: scroll;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-left: 0;
  padding-bottom: 69px;
  margin-bottom: 112px;

  @media (min-width: 1110px) {
    padding-left: calc((100vw - 1110px) / 2);
  }

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-left: 32px;
  }
`

const ExperienceWrapper = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  margin-right: 30px;
`

const ExpThumb = styled.img`
  height: 225px;
  border-radius: 112px;
`

const ExpName = styled.h4`
  margin-top: 24px;
  margin-bottom: 4px;
`

const ExpDetail = styled.body`
  margin: 0;
`

const Experience = ({
  imageSrc,
  imageAlt,
  name,
  detail,
  href,
}: {
  imageSrc: string
  imageAlt: string
  name: string
  detail?: string
  href?: string
}) => {
  if (href) {
    return (
      <a href={href} target="_blank">
        <ExperienceWrapper>
          <ExpThumb src={imageSrc} alt={imageAlt} />
          <ExpName>{name}</ExpName>
          {detail && <ExpDetail>{detail}</ExpDetail>}
        </ExperienceWrapper>
      </a>
    )
  }
  return (
    <ExperienceWrapper>
      <ExpThumb src={imageSrc} alt={imageAlt} />
      <ExpName>{name}</ExpName>
      {detail && <ExpDetail>{detail}</ExpDetail>}
    </ExperienceWrapper>
  )
}

const ArtistCarousel = ({
  artistArray,
}: {
  artistArray: ArtistCarouselProps[]
}) => {
  return (
    <ScrollContainer>
      {artistArray.map((artist, i) => {
        return (
          <Experience key={i}
            imageSrc={artist.imageSrc}
            imageAlt={artist.imageAlt}
            name={artist.name}
            detail={artist.detail}
            href={artist.href}
          />
        )
      })}
    </ScrollContainer>
  )
}

export default ArtistCarousel
