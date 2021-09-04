import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
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

const Wrapper = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    overflow: hidden;
    height: 726px;
  }
`

const VoltaLogo = styled.h1`
  font-family: "SharpGrotesk-Bold25";
  font-size: 90px;
  line-height: 40px;
  letter-spacing: 1;
  color: white;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 240px;
  }
`

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const HeadingWrapper = styled.div`
  grid-column: 4/10;
  vertical-align: middle;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hero = () => {
  return (
    <Wrapper>
      <Video autoPlay={true} loop={true} muted={true} playsInline={true}>
        <source
          src="https://res.cloudinary.com/volta-xr/video/upload/v1617808112/Volta-Website/Hero_Video_24s_-_CQ1-1080_edqycw.mp4"
          type="video/mp4"
        />
      </Video>
      <ContentOverlay>
        <StyledGrid>
          <HeadingWrapper>
            <VoltaLogo>VOLTA</VoltaLogo>
          </HeadingWrapper>
        </StyledGrid>
      </ContentOverlay>
    </Wrapper>
  )
}

export default Hero
