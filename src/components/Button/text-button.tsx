import React from "react"
import styled from "styled-components"
import * as whiteArrow from "../../icons/button_arrow.png"
import * as purpleArrow from "../../icons/button_arrow_purple.png"
interface TextButtonProps {
  text: string
  onClick?: () => void
  to?: string
  target?: string
  white?: boolean
}

const VoltaButton = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  border-radius: 40px;
  padding: 0 40px;
  border-width: 2px;
`

const WhiteButton = styled(VoltaButton)`
  background-color: #fff;
  color: ${({ theme: { colours } }) => colours.primary.purple};
  &:active {
    background-color: ${({ theme: { colours } }) => colours.secondary.active};
  }
  &:hover {
    background-color: ${({ theme: { colours } }) => colours.secondary.hover};
  }
  &:focus {
    outline-color: ${({ theme: { colours } }) => colours.primary.white};
    border-color: ${({ theme: { colours } }) => colours.primary.purple};
  }
`

const PurpleButton = styled(VoltaButton)`
  background-color: ${({ theme: { colours } }) => colours.primary.purple};
  color: ${({ theme: { colours } }) => colours.primary.white};
  &:active {
    background-color: ${({ theme: { colours } }) => colours.primary.active};
  }
  &:hover {
    background-color: ${({ theme: { colours } }) => colours.primary.hover};
  }
  &:focus {
    outline-color: ${({ theme: { colours } }) => colours.primary.purple};
    border-color: ${({ theme: { colours } }) => colours.primary.white};
  }
`

const StyledA = styled.a`
  flex: 1;
`

const TextButton = ({
  onClick,
  white = false,
  target = "",
  text,
  to,
}: TextButtonProps) => {
  if (!onClick && !to) return null
  const contents = (
    <>
      <h4>{text}</h4>
      <img style={{ width: "27px" }} src={white ? purpleArrow : whiteArrow} />
    </>
  )
  const ButtonComponent = white ? WhiteButton : PurpleButton

  return onClick ? (
    <ButtonComponent
      onClick={onClick}
      role="button"
      aria-pressed="true"
      tabIndex={0}
    >
      {contents}
    </ButtonComponent>
  ) : (
    <StyledA href={to} target={target}>
      <ButtonComponent role="button" aria-pressed="true" tabIndex={0}>
        {contents}
      </ButtonComponent>
    </StyledA>
  )
}

export default TextButton
