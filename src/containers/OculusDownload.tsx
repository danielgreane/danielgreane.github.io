import React from "react"
import styled from "styled-components"
import TextButton from "components/Button/text-button"
import headset from "../images/headset.png"
import headsetmobile from "../images/headsetmobile.png"

interface OculusDownloadProps {
  heading: string
  body: string
  buttonLabelDesktop: string
  buttonLabelMobile: string
}

const Wrapper = styled.div`
  background-color: ${({ theme: { colours } }) => colours.primary.white};
  margin: 0 auto;
  height: 732px;
  width: 100vw;
  text-align: center;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    display: grid;
    max-width: 1110px;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Heading = styled.h3`
  width: 480px;
  z-index: 1;
  margin: 0 auto;
  color: ${({ theme: { colours } }) => colours.primary.background};
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    margin-top: 200px;
    grid-column: 4/10;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: auto;
  }
`

const Sub = styled.p`
  margin: 0 auto;
  grid-column: 4/10;
  width: 450px;
  z-index: 1;
  color: ${({ theme: { colours } }) => colours.primary.background};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: auto;
    padding: 0 32px;
    margin: 32px 0;
  }
`

const ButtonWrapper = styled.div`
  margin-bottom: 234px;
  z-index: 1;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 250px;
    margin-bottom: 0;
  }
`

const DesktopButtonWrapper = styled(ButtonWrapper)`
  display: block;
  z-index: 1;
  grid-column: 5/9;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
  }
`

const MobileButtonWrapper = styled(ButtonWrapper)`
  display: none;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: block;
  }
`

const Headset = styled.img`
  position: absolute;
  right: 0;
  z-index: 0;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
  }
`

const HeadsetMobile = styled.img`
  position: absolute;
  right: 0;
  display: none;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: block;
  }
`

const OculusDownload = ({
  heading,
  body,
  buttonLabelDesktop,
  buttonLabelMobile,
}: OculusDownloadProps) => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Headset src={headset} />
      <HeadsetMobile src={headsetmobile} />
      <Wrapper>
        <Heading>{heading}</Heading>
        <Sub>{body}</Sub>
        <DesktopButtonWrapper>
          <TextButton
            text={buttonLabelDesktop}
            to="http://bit.ly/volta-website"
          />
        </DesktopButtonWrapper>
        <MobileButtonWrapper>
          <TextButton
            text={buttonLabelMobile}
            to="http://bit.ly/volta-website"
          />
        </MobileButtonWrapper>
      </Wrapper>
    </div>
  )
}

export default OculusDownload
