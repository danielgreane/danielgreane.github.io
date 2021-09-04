import React, { ReactElement } from "react"
import styled from "styled-components"

interface GridProps {
  children: ReactElement | ReactElement[]
}

const VoltaGrid = styled.div`
  margin: 0 auto;
  height: 100%;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    display: grid;
    max-width: 1110px;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const Grid = ({ children }: GridProps) => {
  return <VoltaGrid>{children}</VoltaGrid>
}

export default Grid
