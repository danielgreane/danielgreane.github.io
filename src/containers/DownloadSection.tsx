import TextButton from "components/Button/text-button"
import React from "react"
import styled from "styled-components"

import { VoltaGrid } from "../theme/components"

const Wrapper = styled.div`
  text-align: center;
  padding: 194px 0 234px;
  background-color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 200px 0;
  }
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Heading = styled.h3`
  grid-column: 4/10;
  margin: 0;
  display: flex;
  justify-content: center;
  color: ${({ theme: { colours } }) => colours.primary.background};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s};
  }
`

const ButtonWrapper = styled.div`
  width: 315px;
  grid-column: 5/9;
  align-self: center;
`

const DownloadSection = () => {
  return (
    <Wrapper>
      <StyledGrid>
        <Heading>
          Download Volta Create and get started on your XR experience now
        </Heading>
        <ButtonWrapper>
          <TextButton text="Download" to="/signup" />
        </ButtonWrapper>
      </StyledGrid>
    </Wrapper>
  )
}

export default DownloadSection
