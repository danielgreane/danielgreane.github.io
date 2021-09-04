import React from "react"
import styled from "styled-components"
import backArrow from "../../icons/small_back_arrow.png"

type SmallType = {
  small: boolean
  arrow?: boolean
}

interface SimpleButtonProps {
  text: string
  onClick?: () => void
  to?: string
  target?: string
  color?: "black" | "white"
  small?: boolean
  arrow?: boolean
}

const VoltaButton = styled.div<SmallType>`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: ${props => props.arrow ? "space-between" : "center"};
  height: ${props => props.small ? `45px` : `80px`};
  border-radius: ${props => props.small ? `48px` : `60px`};
  padding: ${props => props.small ? `0 12px` : `0 32px`};
`

const PurpleButton = styled(VoltaButton)`
  background-color: ${({ theme: { colours }}) => colours.primary.purple};
  color: ${({ theme: { colours } }) => colours.primary.white};
  &:hover {
    background-color: ${({ theme: { colours } }) => colours.primary.hover};
  }
  &:active {
    background-color: ${({ theme: { colours } }) => colours.primary.active};
  }
`

const BlackButton = styled(VoltaButton)`
  background-color: ${({ theme: { colours } }) => colours.primary.black};
  color: ${({ theme: { colours } }) => colours.primary.white};

  &:hover {
    background-color: ${({ theme: { colours } }) => colours.secondary.darkGrey};
  }
  &:active {
    background-color: ${({ theme: { colours } }) => colours.secondary.grey};
  }
`

const WhiteButton = styled(VoltaButton)`
  background-color: ${({ theme: { colours } }) => colours.primary.white};
  color: ${({ theme: { colours } }) => colours.primary.black};

  &:hover {
    background-color: ${({ theme: { colours } }) => colours.secondary.hover};
  }
  &:active {
    background-color: ${({ theme: { colours } }) => colours.secondary.active};
  }
`

const StyledA = styled.a`
  flex: 1;
`

const ButtonText = styled.h5<SmallType>`
  font-size: ${props => props.small ? `12px` : `18px`};
  margin: 0;
`

const StyledBackArrow = styled.img`
  margin-right: 18px;
  width: 19px;
`

const SimpleButton = ({
  onClick,
  text,
  to,
  target = "",
  color,
  small,
  arrow
}: SimpleButtonProps) => {
  if (!onClick && !to) return null
  const contents = (
    <>
      {arrow ? (<StyledBackArrow src={backArrow} />) : null}
      <ButtonText small={small}>{text}</ButtonText>
    </>
  )
  const ButtonComponent = !color ? PurpleButton : color === "black" ? BlackButton : WhiteButton

  return onClick ? (
    <ButtonComponent onClick={onClick} role="button" aria-pressed="true" tabIndex={0} small={small}>
      {contents}
    </ButtonComponent>
  ) : (
    <StyledA href={to} target={target}>
      <ButtonComponent role="button" aria-pressed="true" tabIndex={0} small={small}>
        {contents}
      </ButtonComponent>
    </StyledA>
  )
}

export default SimpleButton
