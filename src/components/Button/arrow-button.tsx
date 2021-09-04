import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"
import * as arrow from "../../icons/button_arrow.png"

interface ArrowButtonProps {
  onClick?: () => void
  to?: string
}

const VoltaButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 103px;
  border-radius: 48px;
  background-color: ${({ theme: { colours } }) => colours.primary.purple};
  padding: 0 40px;
  &:hover {
    background-color: ${({ theme: { colours } }) => colours.primary.hover};
  }
  &:active {
    background-color: ${({ theme: { colours } }) => colours.primary.active};
  }
  &:focus {
    outline: none;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 38px;
    padding: 0;
  }
`

const ArrowButton = ({ onClick, to }: ArrowButtonProps) => {
  if (!onClick && !to) return null
  const contents = <img style={{ width: "27px" }} src={arrow} />
  return onClick ? (
    <VoltaButton onClick={onClick} role="button" tabIndex={0} type="submit">
      {contents}
    </VoltaButton>
  ) : (
    <Link to={to}>{contents}</Link>
  )
}

export default ArrowButton
