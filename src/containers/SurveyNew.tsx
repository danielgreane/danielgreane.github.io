import React from "react"
import styled from "styled-components"
import TextButton from "components/Button/text-button"
import background from "../images/survey_new.png"
import backgroundMobile from "../images/survey_new_mobile.png"
import { VoltaGrid } from "../theme/components"

const Wrapper = styled(VoltaGrid)`
  max-width: 1110px;
  margin: 0 auto 186px;
  background-color: ${({ theme: { colours } }) => colours.primary.purple};
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 455px;
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
  z-index: 1;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    margin-top: 126px;
    grid-column: 3/11;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin: 0 32px;
  }
`

const ButtonWrapper = styled.div`
  margin-bottom: 110px;
  grid-column: 5/9;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 0;
    width: calc(100% - 64px);
    max-width: 285px;
  }
`

const SurveyNew = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Wrapper>
        <Heading>Have your say and help us make Volta better</Heading>
        <ButtonWrapper>
          <TextButton
            target="_blank"
            text="Feedback"
            to="http://bit.ly/volta-survey-website"
          />
        </ButtonWrapper>
      </Wrapper>
    </div>
  )
}

export default SurveyNew
