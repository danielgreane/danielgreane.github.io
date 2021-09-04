import React, { useState } from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import SimpleButton from "./Button/simple-button"
import useDisableBodyScroll from "../hooks/useDisableBodyScroll"
import volta from "../icons/volta_v.png"
import arrow from "../icons/small_arrow_purple.png"

const NavWrapper = styled.div`
  background-color: ${({ theme: { colours }} ) => colours.secondary.darkGrey};
  height: 100vh;
  width: 100vw;
  padding-top: 192px;
  position: fixed;
  overflow: hidden;
  z-index: 9;
`
const NavList = styled.li`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: none;

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 0 32px;
  }
`
const NavListItem = styled.a`
  font-family: 'NHaasGroteskDSStd-75Bd', sans-serif;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0;
  color: white;
  margin-bottom: 32px;
  display: flex;
  align-items: center;

  @media (max-width: 575px) {
    font-size: 32px;
    line-height: 36px;
  }

  &:active {
    color: ${({ theme: { colours } }) => colours.primary.active};
  }
`
const MenuButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;

  a:first-child {
    margin-right: 34px;
  }

  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
      display: none;
  }
`
const ArrowIcon = styled.img`
  width: 32px;
  margin-left: 16px;
`

const Wrapper = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 32px 0;
  background: linear-gradient(180deg, #232323 0%, rgba(35, 35, 35, 0.65) 34.37%, rgba(35, 35, 35, 0.2) 68.98%, rgba(35, 35, 35, 0) 93.98%);
`
const StyledVoltaGrid = styled(VoltaGrid)`
  display: flex;
  justify-content: space-between;
`
const IconWrapper = styled.div`
  width: 50px;
  align-self: center;
`
const VoltaIcon = styled.img`
  align-self: center;
`
const ButtonWrapper = styled.div`
  display: flex;

  a:not(:last-child) {
    margin-right: 24px;
  }

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    a:not(:last-child) {
      display: none;
    }
  }

  & > div {
    cursor: pointer;
  }
`

interface NavItemProps {
  text: string
  to: string
}

const NavItem = ({text, to}: NavItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <NavListItem
      href={to}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {text}
      {isVisible ? <ArrowIcon src={arrow} /> : null}
    </NavListItem>
  )
}

const NavMenu = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem text="Home" to="/" />
        <NavItem text="FAQs" to="/faqs" />
        <NavItem text="Tutorials" to="/tutorials" />
        <NavItem text="Downloads" to="/downloads" />
        <NavItem text="Performances" to="/performances" />
        <MenuButtonWrapper>
          <SimpleButton text="Download" to="/signup" />
          <SimpleButton text="Discord" target="_blank" to="https://discord.gg/R9aYJ6rNtJ" color="black" />
        </MenuButtonWrapper>
      </NavList>
    </NavWrapper>
  )
}

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLabel, setMenuLabel] = useState("Menu");
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
    menuOpen ? setMenuLabel("Menu") : setMenuLabel("Close")
  }
  const onClickHandler = () => {
    toggleMenuOpen()
  }
  useDisableBodyScroll(menuOpen);
  return (
    <>
      <Wrapper>
        <StyledVoltaGrid>
          <IconWrapper>
          <a href="/">
            <VoltaIcon src={volta} />
            </a>
          </IconWrapper>
          <ButtonWrapper>
            <SimpleButton text="Download" to="/signup" />
            <SimpleButton text="Discord" target="_blank" to="https://discord.gg/R9aYJ6rNtJ" color="black" />
            <SimpleButton text={menuLabel} onClick={onClickHandler} color="white" />
          </ButtonWrapper>
        </StyledVoltaGrid>
      </Wrapper>
      {menuOpen ? <NavMenu /> : null}
    </>
  )
}

export default Nav
