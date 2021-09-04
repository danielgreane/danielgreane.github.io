import { createGlobalStyle } from "styled-components"
import NHBlackWoff from "../fonts/NeueHaasGroteskDisplayStd/NeueHaasDisplayBlack.woff"
import NHBlackOtf from "../fonts/NeueHaasGroteskDisplayStd/NHaasGroteskDSStd95Blk.otf"
import NHLightWoff from "../fonts/NeueHaasGroteskDisplayStd/NeueHaasDisplayLight.woff"
import NHLightOtf from "../fonts/NeueHaasGroteskDisplayStd/NHaasGroteskDSStd45Lt.otf"
import NHBoldWoff from "../fonts/NeueHaasGroteskDisplayStd/NeueHaasDisplayBold.woff"
import NHBoldOtf from "../fonts/NeueHaasGroteskDisplayStd/NHaasGroteskDSStd75Bd.otf"
import SharpGrotesk from "../fonts/SharpGroteskBold25/SharpGroteskBold25.otf"

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
  @font-face {
    font-family: 'NHaasGroteskDSStd-45L';
    src: local('Neue Haas Grotesk Display Pro 45 Light'), url(${NHLightWoff}) format('woff'), url(${NHLightOtf});
  }

  @font-face {
    font-family: 'NHaasGroteskDSStd-75Bd';
    src: local('Neue Haas Grotesk Display Pro 75 Bold'), url(${NHBoldWoff}) format('woff'), url(${NHBoldOtf});
  }
    

  @font-face {
    font-family: 'NHaasGroteskDSStd-95Blk';
    src: local('Neue Haas Grotesk Display Pro 95 Black'), url(${NHBlackWoff}) format('woff'), url(${NHBlackOtf});
  }

  @font-face {
    font-family: 'SharpGrotesk-Bold25';
    src: url(${SharpGrotesk});
  }
  html { 
    overflow-x:hidden;
    background-color: #000000;
  }
  body {
    font-family: 'NHaasGroteskDSStd-45L', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
    margin: 0;
    padding: 0;
    overflow-x:hidden;
  }
  p {
    font-family: 'NHaasGroteskDSStd-45L', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    font-weight: bold;
  }
  input, textarea {
    font-family: 'NHaasGroteskDSStd-45L', sans-serif;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 2px;
  }
  img {
    max-width: 100%;
  }

  h1 {
    font-family: 'NHaasGroteskDSStd-95Blk', sans-serif;
    font-size: 64px;
    line-height: 54px;
    letter-spacing: 0;
  }
  h2 {
    font-family: 'NHaasGroteskDSStd-95Blk', sans-serif;
    font-size: 54px;
    line-height: 54px;
    letter-spacing: 0;
  }
  h3 {
    font-family: 'NHaasGroteskDSStd-75Bd', sans-serif;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0;
  }
  h4 {
    font-family: 'NHaasGroteskDSStd-75Bd', sans-serif;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0;
  }
  h5 {
    font-family: 'NHaasGroteskDSStd-75Bd', sans-serif;
    font-size: 18px;
    line-height: 20px;
  }
  .small-body {
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: 575px) {
    h1 {
      font-family: 'NHaasGroteskDSStd-95Blk', sans-serif;
      font-size: 50px;
      line-height: 48px;
    }
    h2 {
      font-family: 'NHaasGroteskDSStd-95Blk', sans-serif;
      font-size: 32px;
      line-height: 36px;
    }
    h3 {
      font-family: 'NHaasGroteskDSStd-75Bd', sans-serif;
      font-size: 24px;
      line-height: 24px;
    }
  }
`

export default GlobalStyle