import React from "react"
import styled from "styled-components"

interface EmbedVideoProps {
  url: string
}

const EmbedVideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: calc(((100vw - 64px)/16)*9);
  }
`

const EmbedVideo = ({ url }: EmbedVideoProps) => {
  return (
    <EmbedVideoIframe
      scrolling="no"
      src={`https://www.youtube.com/embed/${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default EmbedVideo
