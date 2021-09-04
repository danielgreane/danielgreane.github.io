import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"

const PlaceholderImage = styled.div`
  box-sizing: border-box;
  width: 130px;
  height: 130px;
  border-radius: 30px;
  padding: 10px;
  background-color: ${({ theme: { colours } }) => colours.secondary.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    min-width: 112px;
    height: 112px;
  }
`
const PlaceholderText = styled.h5`
  color: ${({ theme: { colours } }) => colours.primary.white};
  text-align: center;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 14px;
  }
`

const StyledGrid = styled(VoltaGrid)`
  padding: 120px 0;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    padding: 72px 0;
  }
`
const Heading = styled.h3`
  grid-column: 1/4;
  margin-top: 0;
  color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 32px;
  }
`
const PatchesHeading = styled(Heading)`
  margin-top: 120px;
`
const GuidesContainer = styled(VoltaGrid)`
  margin: 0;
  grid-column: 1/13;

  div:nth-child(odd) {
    grid-column: 1/7;
  }
  div:nth-child(even) {
    grid-column: 7/13;
  }

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0;

    div:not(:last-child) {
      margin-bottom: 60px;
    }
  }
`

const GuideWrapper = styled.div`
  display: flex;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {

  }
`
const TextWrapper = styled.div`
  color: ${({ theme: { colours } }) => colours.primary.white};
  margin-left: 45px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-left: 27px;
  }
`
const GuideHeading = styled.h4`
  margin-top: 0;
`
const Version = styled.p`
  color: #F5A623;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 14px;
  }
`
const Updated = styled.p`
  margin-bottom: 24px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 14px;
  }
`
const DownloadAnchor = styled.a``
const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 132px;
  border-radius: 48px;
  padding: 0 14px;
  cursor: pointer;
  background-color: ${({ theme: { colours }}) => colours.primary.purple};
  color: ${({ theme: { colours } }) => colours.primary.white};
  &:hover {
    background-color: ${({ theme: { colours } }) => colours.primary.hover};
  }
  &:active {
    background-color: ${({ theme: { colours } }) => colours.primary.active};
  }
`
const ButtonText = styled.h5`
  font-size: 12px;
`

interface PlaceholderThumbnailProps {
  text: string
}

const PlaceholderThumbnail = ({text}: PlaceholderThumbnailProps) => {
  return (
    <PlaceholderImage>
      <PlaceholderText>
        {text}
      </PlaceholderText>
    </PlaceholderImage>
  )
}

interface GuideItemProps {
  thumbnailText: string
  heading: string
  version: number
  updated: string
  downloadLink: string
}

const GuideItem = ({
  thumbnailText,
  heading,
  version,
  updated,
  downloadLink
}: GuideItemProps) => {
  return (
    <GuideWrapper>
      <PlaceholderThumbnail text={thumbnailText} />
      <TextWrapper>
        <GuideHeading>{heading}</GuideHeading>
        <Version>For Version {version}</Version>
        <Updated>Updated {updated}</Updated>
        <DownloadAnchor href={downloadLink}>
          <DownloadButton role="button" aria-pressed="true" tabIndex={0}>
            <ButtonText>Download</ButtonText>
          </DownloadButton>
        </DownloadAnchor>
      </TextWrapper>
    </GuideWrapper>
  )
}

const Guides = () => {
  return (
    <StyledGrid>
      <Heading>Guides</Heading>
      <GuidesContainer>
        <GuideItem
          thumbnailText="VOLTA CREATE PDF"
          heading="Instructional PDF for Create"
          version={0.7}
          updated="2 September"
          downloadLink="https://bit.ly/3tc37bp"
        />
        {/* <GuideItem
          thumbnailText="VOLTA GLOSSARY GUIDE"
          heading="Glossary of terms and elements"
          version={0.7}
          updated="1 September"
          downloadLink="volta_glossary_guide_download"
        /> */}
      </GuidesContainer>
      <PatchesHeading>Patches</PatchesHeading>
      <GuidesContainer>
        <GuideItem
          thumbnailText="VoltaMax Patch"
          heading="Volta Max For Live Patch"
          version={0.7}
          updated="2 September"
          downloadLink="https://bit.ly/3BHwfdL"
        />
        <GuideItem
          thumbnailText="Volta Traktor Patch"
          heading="Volta Traktor Patch"
          version={0.7}
          updated="2 September"
          downloadLink="https://bit.ly/38B9NGx"
        />
      </GuidesContainer>
    </StyledGrid>
  )
}

export default Guides
