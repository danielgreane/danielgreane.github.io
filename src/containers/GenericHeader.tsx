import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"

interface GenericHeaderProps {
  heading: string
  text: string
}

const Wrapper = styled(VoltaGrid)`
  padding-top: 210px;
  padding-bottom: 100px;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/5;
`
const Heading = styled.h1`
  color: ${({ theme: { colours } }) => colours.primary.white};
`
const Text = styled.p`
  color: ${({ theme: { colours } }) => colours.primary.white};
  text-align: left;
`

const GenericHeader = ({
    heading,
    text
  }: GenericHeaderProps) => {
  return (
    <Wrapper>
      <TextContainer>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
      </TextContainer>
    </Wrapper>
  )
}

export default GenericHeader
