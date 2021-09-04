import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import SimpleButton from "components/Button/simple-button"
import packshot from "../images/packshot_6.png"
import mobile from "../images/packshot_6_mobile.png"

const Wrapper = styled.div`
  color: ${({ theme: { colours } }) => colours.primary.white};
  background-color: ${({ theme: { colours } }) => colours.primary.black};
`
const StyledGrid = styled(VoltaGrid)`
  position: relative;
  padding: 160px 0 210px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile } {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    padding: 40px 0 64px;
  }
`
const TextWrapper = styled.div`
  grid-column: 1/6;
  ${({ theme: { breakpoints } }) => breakpoints.mobile } {
    margin-right: 32px;
  }
`
const Heading = styled.h3`
  margin: 0;
  margin-bottom: 32px;
`
const Text = styled.p`
  margin-bottom: 32px;
`
const ButtonWrapper = styled.div`
  width: 260px;
`
const ImageWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 0;
  bottom: 32px;
  transform: translate(40%);
  @media (min-width: 768px) and (max-width: 1000px) {
    top: 120px;
    bottom: 120px;
  }
`
const Image = styled.img`
  height: 100%;
  ${({ theme: { breakpoints } }) => breakpoints.mobile } {
    display: none;
  }
`
const MobileImage = styled.img`
  height: 100%;
  width: 100%;
  ${({ theme: { breakpoints } }) => breakpoints.desktop } {
    display: none;
  }
`

const GettingStarted = () => {
  return (
    <Wrapper>
      <StyledGrid>
        <MobileImage src={mobile} />
        <TextWrapper>
          <Heading>Getting started tutorials</Heading>
          <Text>
            Find all the videos to get set up designing, performing and  streaming with your rig in minutes
          </Text>
          <ButtonWrapper>
            <SimpleButton text="Start" to="/tutorials/module-1/" />
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <Image src={packshot} />
        </ImageWrapper>
      </StyledGrid>
    </Wrapper>
  )
}

export default GettingStarted
