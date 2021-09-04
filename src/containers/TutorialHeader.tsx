import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"

interface TutorialHeaderProps {
  path: "all" | "get-started"
}

const StyledGrid = styled(VoltaGrid)<TutorialHeaderProps>`
  padding-top: 213px;
  padding-bottom: ${props => props.path === "all" ? `99px` : `71px`};
  color: ${({ theme: { colours } }) => colours.primary.white};
`
const TextWrapper = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Heading = styled.h1`
  margin: 0;
`
const Instructions = styled.h5`
  color: ${({ theme: { colours } }) => colours.primary.purple};
`
const StyledA = styled.a`
  color: ${({ theme: { colours } }) => colours.primary.purple};
  &:hover {
    text-decoration: underline;
  }
`

const TutorialHeader = ({ path }: TutorialHeaderProps) => {
  return (
    <StyledGrid path={path}>
      {path === "all" ? (
        <TextWrapper>
          <Heading>Tutorials</Heading>
        </TextWrapper>
      ) : (
        <TextWrapper>
          <Heading>Get started tutorials</Heading>
          <StyledA href="https://volta-xr.link/tutorialsv07">
            <Instructions>DOWNLOAD INSTRUCTIONS</Instructions>
          </StyledA>
        </TextWrapper>
      )}
    </StyledGrid>
  )
}

export default TutorialHeader
