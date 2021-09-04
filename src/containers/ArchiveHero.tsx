import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import TextButton from "components/Button/text-button"

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    overflow: hidden;
    height: 726px;
  }
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Heading = styled.h1`
  color: white;
  align-self: end;
  grid-column: 4/10;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 240px;
  }
`

const Video = styled.video`
  z-index: -1;
  overflow: hidden;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    width: 100%;
    position: fixed:
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    position: absolute;
    right: 0;
    bottom: -25%;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
  }
`

const ButtonWrapper = styled.div`
  width: 315px;
  grid-column: 5/9;
  align-self: start;
`

const ArchiveHero = () => {
  return (
    <Wrapper>
      <Video autoPlay={true} loop={true} muted={true} playsInline={true}>
        <source
          src="https://res.cloudinary.com/volta-xr/video/upload/v1617870718/Volta-Website/For_Fans_v3_-_CQ1-1080_veywnc.mp4"
          type="video/mp4"
        />
      </Video>
      <ContentOverlay>
        <StyledGrid>
          <Heading>
            XR Performances powered by Volta
          </Heading>
          <ButtonWrapper>
            <TextButton text="View archive" to="/performances" />
          </ButtonWrapper>
        </StyledGrid>
      </ContentOverlay>
    </Wrapper>
  )
}

export default ArchiveHero
