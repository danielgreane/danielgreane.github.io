import React from "react"
import styled from "styled-components"
import * as logo from "../icons/VOLTA.png"
import * as twitter from "../icons/twitter.png"
import * as facebook from "../icons/facebook.png"
import * as insta from "../icons/insta.png"
import * as youtube from "../icons/youtube.png"
import Grid from "./grid"

const Container = styled.div`
  text-align: center;
  background-color: ${({ theme: { colours } }) => colours.primary.black};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: flex;
    align-items: center;
  }
`

const Logo = styled.img`
  grid-column-start: 1;
  grid-column-end: 3;
  height: 19px;
  margin-bottom: 54px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 48px;
  }
`

const SocialA = styled.a`
  padding-left: 30px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-left: 0;
  }
`

const SocialIcon = styled.img`
  height: 18px;
`

const SocialWrapper = styled.div`
  display: flex;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    grid-column-end: 13;
    grid-column-start: 9;
    justify-self: end;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 150px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0;
    order: 2;
  }
`
const CopyrightWrapper = styled.div`
  grid-column: 1/13;
`
const Copyright = styled.p`
  font-size: ${({ theme: { text } }) => text.smallFont};
  line-height: ${({ theme: { text } }) => text.smallLineHeight};
  color: ${({ theme: { colours } }) => colours.secondary.grey};
  margin: 0 auto;
  margin-bottom: 32px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    order: 3;
    margin-top: 36px;
    margin-bottom: 24px;
  }
`
const LinkWrapper = styled.div`
  grid-column: 1/5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-bottom: 34px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    text-align: center;
    align-items: center;
    padding-bottom: 52px;

    & > a:first-of-type {
      margin-bottom: 24px;
    }
  }
`
const StyledLink = styled.a`
  color: ${({ theme: { colours } }) => colours.primary.white};
  font-family: "NHaasGroteskDSStd-45L";
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`
const Wrapper = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: space-between;
  padding-top: 64px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
    padding-top: 48px;
  }
`

const SocialGroup = () => {
  return (
    <SocialWrapper>
      <SocialLink src={twitter} href="https://twitter.com/experiencevolta" />
      <SocialLink
        src={facebook}
        href="https://www.facebook.com/ExperienceVolta/"
      />
      <SocialLink
        src={insta}
        href="https://www.instagram.com/experiencevolta"
      />
      <SocialLink
        src={youtube}
        href="https://www.youtube.com/channel/UCwNOTJrDUlzofNw5iW-WieA"
      />
    </SocialWrapper>
  )
}

const SocialLink = ({ src, href }: { src: string; href: string }) => {
  return (
    <SocialA href={href} target="_blank">
      <SocialIcon src={src} />
    </SocialA>
  )
}

const Footer = () => {
  return (
    <Container>
      <Grid>
        <Wrapper>
          <LinkWrapper>
            <Logo src={logo} />
            <StyledLink href="mailto:media@volta-xr.com">
              Media and business enquiries
            </StyledLink>
            <StyledLink
              href="https://discord.gg/R9aYJ6rNtJ"
              target="_blank">
              Help and Support
            </StyledLink>
          </LinkWrapper>
          <SocialGroup />
        </Wrapper>
        <CopyrightWrapper>
          <Copyright>
            Copyright © 2021 - Volta
          </Copyright>
        </CopyrightWrapper>
      </Grid>
    </Container>
  )
}

export default Footer
