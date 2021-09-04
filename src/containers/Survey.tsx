import React from "react"
import styled from "styled-components"
import TextButton from "components/Button/text-button"
import background from "../images/survey.png"
import backgroundMobile from "../images/surveymobile.png"
import { VoltaGrid } from "../theme/components"

const Wrapper = styled(VoltaGrid)`
  max-width: 1110px;
  margin: 0 auto 120px;
  background-color: pink;
  background-image: url(${background});
  background-size: cover;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    background-image: url(${backgroundMobile});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 732px;
  }
`

const Heading = styled.h3`
  width: 480px;
  z-index: 1;
  margin: 0 auto;
  color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    margin-top: 120px;
    grid-column: 4/10;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 132px;
    width: 45%;
  }
`

const ButtonWrapper = styled.div`
  margin: 64px 0;
  grid-column: 5/9;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 0;
    width: calc(100% - 64px);
  }
`

const Survey = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Wrapper>
        <Heading>Help us improve Volta</Heading>
        <ButtonWrapper>
          <TextButton
            target="_blank"
            text="Take the survey"
            to="http://bit.ly/volta-survey-website"
            white={true}
          />
        </ButtonWrapper>
      </Wrapper>
    </div>
  )
}

export default Survey
