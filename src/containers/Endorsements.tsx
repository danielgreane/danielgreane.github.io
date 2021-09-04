import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import techstars from "../icons/techstars_logo.png"
import mxcloud from "../icons/m_xcloud.png"
import boiler from "../icons/boiler_room_logo.png"
import inventions from "../icons/best_inventions.png"

const Wrapper = styled.div`
  padding: 64px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { colours } }) => colours.primary.white};
`
const StyledGrid = styled(VoltaGrid)`
  width: 100%;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 96px 0;
    display: flex;
    flex-direction: column;
  }
`

const EndorsementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Endorsement1 = styled(EndorsementContainer)`
  grid-column: 2/7;
  margin-bottom: 75px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin: 0;
    padding-bottom: 96px;
  }
`
const Endorsement2 = styled(EndorsementContainer)`
  grid-column: 7/12;
  margin-bottom: 75px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin: 0;
    padding-bottom: 96px;
  }
`
const Endorsement3 = styled(EndorsementContainer)`
  grid-column: 2/7;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-bottom: 96px;
  }
`
const Endorsement4 = styled(EndorsementContainer)`
  grid-column: 7/12;
`
const Heading = styled.h5`
  margin: 0;
  margin-bottom: 10px;
  color: ${({ theme: { colours } }) => colours.primary.background};
`
const IconContainer = styled.div`
  display: flex;
`

const TechstarsIcon = styled.img``
const MxcloudIcon = styled.img`
  padding-top: 8px;
  max-height: 24px;
`
const BoilerIcon = styled.img`
  max-height: 107px;
`
const InventionIcon = styled.img`
  max-height: 107px;
`

const Endorsements = () => {
  return (
    <Wrapper>
      <StyledGrid>
        <Endorsement1>
          <Heading>Endorsed by</Heading>
          <IconContainer>
            <TechstarsIcon src={techstars} />
          </IconContainer>
        </Endorsement1>
        <Endorsement2>
          <Heading>Premium streaming partner</Heading>
          <IconContainer>
            <MxcloudIcon src={mxcloud} />
          </IconContainer>
        </Endorsement2>
        <Endorsement3>
          <Heading>Performance partner</Heading>
          <IconContainer>
            <BoilerIcon src={boiler} />
          </IconContainer>
        </Endorsement3>
        <Endorsement4>
          <Heading>Finalist</Heading>
          <IconContainer>
            <InventionIcon src={inventions} />
          </IconContainer>
        </Endorsement4>
      </StyledGrid>
    </Wrapper>
  )
}

export default Endorsements
