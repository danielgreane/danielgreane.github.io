import React from "react"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styled from "styled-components"
import globe from "../icons/globe_icon.png"
import thumbs from "../icons/thumbs_icon.png"
import heart from "../icons/heart_icon.png"
import UseMediaQuery from "../hooks/useMediaQuery"

interface CarouselSlideProps {
  src: string
  heading: string
  text: string
}

interface CarouselContainerProps {
  isMobile: boolean
  children: React.ReactChild[] & React.ReactNode
}

const ContentGrid = styled.div`
  display: flex;
  grid-column: 1/13;
`
const ContentImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContentImage = styled.img`
  max-height: 100px;
  max-width: 100px;
  padding: 0 20px;
  margin-bottom: 20px;
`
const TextWrapper = styled.div`
  color: ${({ theme: { colours } }) => colours.primary.white};
  min-height: 240px;
  display: flex;
  flex-direction: column;
`
const Heading = styled.h4`
  text-align: center;
`
const Text = styled.p`
  text-align: center;
  display: inline-block;
  padding: 0 20px;
  margin: 20px 0;
`
const CarouselItem = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`
const StyledCarousel = styled(Carousel)`
  height: 100%;
  .slider-wrapper {
    position: relative;
    margin-bottom: 32px;
  }
  .control-dots > .selected {
    background-color: ${({ theme: { colours } }) => colours.primary.purple};
  }
`
const CarouselSlide = ({src, heading, text}: CarouselSlideProps) => {
  return (
    <CarouselItem>
      <ContentImageWrapper>
        <ContentImage src={src} />
      </ContentImageWrapper>
      <TextWrapper>
        <Heading>
          {heading}
        </Heading>
        <Text>
          {text}
        </Text>
      </TextWrapper>
    </CarouselItem>
  )
}

const CarouselContainer = ({isMobile, children}: CarouselContainerProps) => {
  const settings = {
    autoPlay: true,
    interval: 6000,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    centerMode: true,
    centerSlidePercentage: 90,
  }
  return (
    isMobile ? (
      <StyledCarousel {...settings}>
        {children}
      </StyledCarousel>
    ) : (
      <ContentGrid>
        {children}
      </ContentGrid>
    )
  )
}

const ContentCarousel = () => {
  const isMobile = () => {
    return UseMediaQuery('(max-width: 768px)');
  };
  return (
    <CarouselContainer isMobile={isMobile()}>
      <CarouselSlide
        src={globe}
        heading={"Available for all"}
        text={"Whether you're a DJ, producer, artist or a creator, you can design real-time interactive experiences and engage your audience in mixed reality!"}
      />
      <CarouselSlide
        src={thumbs}
        heading={"Easy for anyone"}
        text={"Stream your performance live or record and save clips with just a click of a button. Making immersive visual content for all your channels has never been easier."}
      />
      <CarouselSlide
        src={heart}
        heading={"Free for everyone"}
        text={"What once required a production studio and a big budget is now  completely free and you have full creative control over your work! The Volta world is your oyster!"}
      />
    </CarouselContainer>
  )
}

export default ContentCarousel
