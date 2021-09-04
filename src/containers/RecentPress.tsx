import React from "react"
import styled from "styled-components"

import tc from "../icons/tc.png"
import reuters from "../icons/reuters.png"
import rolling from "../icons/rolling_stone.png"
import dezeen from "../icons/dezeen.png"

const Gradient = styled.div`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      123.35deg,
      #e9499b 0%,
      rgba(235, 243, 208, 0) 18.4%
    ),
    radial-gradient(
      29.9% 70.94% at 44.25% 86.96%,
      #dc8ddc 0%,
      rgba(220, 141, 220, 0) 100%
    ),
    radial-gradient(
      33.83% 53.57% at 35.87% 100%,
      #dc8ddc 0%,
      rgba(220, 141, 220, 0) 100%
    ),
    radial-gradient(
      42.66% 49.72% at 45.56% 44.65%,
      #cbadeb 0%,
      rgba(194, 166, 241, 0) 100%
    ),
    linear-gradient(134.59deg, #cdf9e8 20.63%, rgba(205, 249, 232, 0) 47.84%),
    linear-gradient(
      216.44deg,
      rgba(192, 169, 240, 0) -16.52%,
      #c0a9f0 -1.04%,
      rgba(192, 169, 240, 0) 16.99%
    ),
    linear-gradient(
      128.53deg,
      rgba(192, 169, 240, 0) 28.63%,
      #c0a9f0 38.5%,
      rgba(192, 169, 240, 0) 50.26%
    ),
    radial-gradient(
      40.75% 97.37% at 90.75% 40.15%,
      #f0ee8e 0%,
      #ffbd60 34.46%,
      #ff77aa 69.5%,
      rgba(255, 129, 38, 0) 100%
    ),
    #ab7ff6;
`

const WhiteRect = styled.div`
  background-color: ${({ theme: { colours } }) => colours.primary.white};
  height: 106px;
  width: 169px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: 83px;
    width: 132px;
  }
`

const LogoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    width: 445px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 85%;
    padding: 0 32px;
  }
`

const TC = styled.img``
const Reuters = styled.img``
const Rolling = styled.img`
  width: 85%;
`
const Dezeen = styled.img``

const H4 = styled.h4`
  margin: 48px 0;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const RecentPress = () => {
  return (
    <Gradient>
      <LogoGroup>
        <a
          href="https://techcrunch.com/2021/03/09/techstars-music-announces-its-2021-class-and-a-partnership-with-media-company-quality-control/?guccounter=1"
          target="_blank"
        >
          <WhiteRect>
            <TC src={tc} alt="tc" />
          </WhiteRect>
        </a>
        <a
          href="https://reuters.com/video/watch/music-mixing-in-virtual-reality-id589453357?edition-redirect=uk"
          target="_blank"
        >
          <WhiteRect>
            <Reuters src={reuters} alt="reuters" />
          </WhiteRect>
        </a>
      </LogoGroup>
      <H4>Recent press</H4>
      <LogoGroup>
        <a
          href="https://www.dezeen.com/2019/07/15/volta-virtual-reality-alex-kane-royal-college-of-art-video/"
          target="_blank"
        >
          <WhiteRect>
            <Dezeen src={dezeen} alt="dezeen" />
          </WhiteRect>
        </a>
        <a
          href="https://www.twitch.tv/videos/1027270328?t=00h15m45s"
          target="_blank"
        >
          <WhiteRect>
            <Rolling src={rolling} alt="rolling stone" />
          </WhiteRect>
        </a>
      </LogoGroup>
    </Gradient>
  )
}

export default RecentPress
