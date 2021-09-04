import React from "react"
import styled from "styled-components"
import youtube from "../icons/youtube_black_play.png"

interface VideoSizeProps {
  width?: string
  height?: string
  mobileWidth?: string
  mobileHeight?: string
}

interface VideoThumbnailProps {
  videoId: string
  alt: string
  modulePath: string
  width?: string
  height?: string
  mobileWidth?: string
  mobileHeight?: string
  onClick?: () => void
}

const ThumbnailLink = styled.a`
  display: inline-block;
`
const ThumbnailWrapper = styled.div<VideoSizeProps>`
  width: ${props => props.width ? `${props.width}` : `384px`};
  height: ${props => props.height ? `${props.height}` : `216px`};
  position: relative;
  display: inline-block;
  cursor: pointer;

  ${({ theme: { breakpoints } }) => breakpoints.mobile } {
    width: ${props => props.mobileWidth ? `${props.mobileWidth}` : `272px`};
    height: ${props => props.mobileHeight ? `${props.mobileHeight}` : `153px`};
  }

  &:before {
    content: "";
    position: absolute;
    background-color: rgba(35, 35, 35, 0.4);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &:after {
    content: "";
    background-image: url(${youtube});
    background-size: 26% 35%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 0;
    z-index: 1;
    width: inherit;
    height: inherit;
    display: inline-block;
  }
`
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`
const ThumnbnailText = styled.p`
  display: inline-block;
  position: absolute;
  left: 10px;
  top: 10px;
  color: white;
`

const VideoThumbnail = ({
  videoId,
  alt,
  modulePath,
  width,
  height,
  mobileWidth,
  mobileHeight,
  onClick
}: VideoThumbnailProps) => {
  return (
    onClick ? (
      <ThumbnailWrapper
        width={width}
        height={height}
        mobileWidth={mobileWidth}
        mobileHeight={mobileHeight}
      >
        <Thumbnail src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} alt={alt}/>
        <ThumnbnailText>{alt}</ThumnbnailText>
      </ThumbnailWrapper>
    ) : (
      <ThumbnailLink href={`/tutorials/${modulePath}`}>
        <ThumbnailWrapper
          width={width}
          height={height}
          mobileWidth={mobileWidth}
          mobileHeight={mobileHeight}
        >
          <Thumbnail src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} alt={alt}/>
          <ThumnbnailText>{alt}</ThumnbnailText>
        </ThumbnailWrapper>
      </ThumbnailLink>
    )
  )
}

export default VideoThumbnail
