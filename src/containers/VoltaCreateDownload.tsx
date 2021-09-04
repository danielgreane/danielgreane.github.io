import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import SimpleButton from "../components/Button/simple-button"
import perform from "../images/perform.png"
import performMobile from "../images/perform_mobile.png"

interface VoltaCreateDownloadProps {
  version: number
  updateDate: string
  includes: string[]
}

const Wrapper = styled.div`
  background-color: ${({ theme: { colours } }) => colours.primary.black};
  position: relative;
`
const StyledGrid = styled(VoltaGrid)`
  position: relative;
  z-index: 1;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }

`
const ContentWrapper = styled.div`
  grid-column: 1/6;
  @media (min-width: 768px) and (max-width: 1000px) {
    padding-right: 32px;
    background-color: rgba(35, 35, 35, 0.5);
  }

`
const Heading = styled.h3`
  color: ${({ theme: { colours } }) => colours.primary.white};
  margin-top: 155px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 320px;
    font-size: 32px;
  }
`
const Version = styled.h5`
  color: #F5A623;
  margin-bottom: 0;
  font-size: 24px;
`
const Updated = styled.h5`
  color: ${({ theme: { colours } }) => colours.primary.white};
  margin-top: 0;
  font-size: 24px;
`
const IncludesWrapper = styled.div`
  color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 14px;
    & > p {
      font-size: 14px;
    }
  }
`
const IncludesList = styled.ul`
  margin: 0;
  margin-bottom: 40px;
`
const IncludesItem = styled.li``
const ButtonWrapper = styled.div`
  min-width: 275px;
  margin-bottom: 220px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 75px;
  }
`
const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
  }
`
const MobileImage = styled.img`
  height: 275px;
  position: absolute;
  right: 0;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    display: none;
  }
`

const VoltaCreateDownload = ({
  version,
  updateDate,
  includes
}: VoltaCreateDownloadProps) => {
  return (
    <Wrapper>
      <MobileImage src={performMobile} />
      <StyledGrid>
        <ContentWrapper>
          <Heading>
            Volta Create
          </Heading>
          <Version>
            Version {version}
          </Version>
          <Updated>
            Updated on {updateDate}
          </Updated>
          <IncludesWrapper>
            <p>Includes</p>
            <IncludesList>
              {includes.map((item, i) => <IncludesItem key={i}>{item}</IncludesItem>)}
            </IncludesList>
          </IncludesWrapper>
          <ButtonWrapper>
            <SimpleButton text="Download" to="/signup" />
          </ButtonWrapper>
        </ContentWrapper>
      </StyledGrid>
      <Image src={perform} />
    </Wrapper>
  )
}

export default VoltaCreateDownload
