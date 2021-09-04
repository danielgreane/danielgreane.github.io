import styled from "styled-components"

export const VoltaGrid = styled.div`
  margin: 0 auto;
  height: 100%;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    display: grid;
    max-width: 1110px;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: grid;
    max-width: 1110px;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
    margin: 0 32px;
  }
`