import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import TextButton from "components/Button/text-button"
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form"
import packshot from "../images/packshot_6.png"
import mobile from "../images/packshot_6_mobile.png"

const Wrapper = styled.div`
  text-align: left;
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin: 0;
    margin-left: 32px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`
const ImageWrapper = styled.div`
  grid-column: 1/13;
  margin-top: 192px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {

  }
`
const HeroImage = styled.img`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
  }
`
const MobileImage = styled.img`
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    display: none;
  }
`

const ErrorHeading = styled.h3`
  color: ${({ theme: { colours } }) => colours.primary.white};
  text-align: left;
  grid-column: 3/9;
`

const ErrorSub = styled.p`
  color: ${({ theme: { colours } }) => colours.primary.white};
  grid-column: 3/8;
  text-align: left;
  margin-bottom: 120px;
`

const ButtonWrapper = styled.div`
  min-width: 315px;
  max-width: 390px;
  grid-column: 1/4;
  margin-bottom: 300px;
`

const FormWrapper = styled.div`
  grid-column: 1/13;
  text-align: center;
`

const FormContainer = styled.div`
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    margin-top: 120px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-right: 32px;
  }
  .hs-main-font-element {
    h3 {
      color: ${({ theme: { colours } }) => colours.primary.white};
      text-align: left;
      line-height: 48px;
      margin-top: 0;
      // hubspot is injecting inline styling for font-size, need !important to override
      ${({ theme: { breakpoints } }) => breakpoints.mobile} {
        font-size: 32px !important;
        line-height: 32px;
      }
    }
    h5 {
      text-align: left;
      color: ${({ theme: { colours } }) => colours.primary.white};
      margin-bottom: 0;
    }
    p {
      color: ${({ theme: { colours } }) => colours.primary.white};
      grid-column: 3/8;
      text-align: left;
    }
    .small-text {
      font-size: ${({ theme: { text } }) => text.smallFont};
    }
  }
  .hs-error-msgs {
    margin: 0;
    & > li {
      color: red;
      font-size: ${({ theme: { text } }) => text.smallFont};
      text-align: left;
      margin: 0;
      & > label > a {
        color: red;
      }
    }
  }
  .hs-form {
    text-align: left;
    ${({ theme: { breakpoints } }) => breakpoints.desktop} {
      column-count: 2;
      & > div:nth-of-type(2) {
        margin-right: 190px;
      }
      & > div:nth-of-type(3) {
        margin-top: 32px;
        margin-right: 190px;
        padding-bottom: 300px;
        margin-bottom: 100%;
      }
    }
  }
  .hs-form-field {
    width: 100%;
  }
  .hs_music_performance_software > label {
    color: ${({ theme: { colours } }) => colours.primary.white};
  }
  .hs-form-checkbox-display {
    color: ${({ theme: { colours } }) => colours.primary.white};
    display: flex;
  }
  .hs-dependent-field {
    margin-top: 24px;
  }
  .hs-input {
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 22px;
    margin-top: ${({ theme: { spacing } }) => spacing.s};
  }
  .hs-input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin: 0;
    margin-right: 16px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .inputs-list {
    padding: 0;
  }
  .actions {
    text-align: left;
    position: relative;
    margin-bottom: 120px;
    margin-top: ${({ theme: { spacing } }) => spacing.s};
  }
  .hs-button {
    -webkit-appearance: none;
    text-align: center;
    color: ${({ theme: { colours } }) => colours.primary.white};
    font-family: "NHaasGroteskDSStd-75Bd", sans-serif;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0;
    border: none;
    display: inline-block;
    height: 72px;
    width: 315px;
    border-radius: 48px;
    background-color: ${({ theme: { colours } }) => colours.primary.purple};
    padding: 0 40px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme: { colours } }) => colours.primary.hover};
    }
    &:active {
      background-color: ${({ theme: { colours } }) => colours.primary.active};
    }
    &:focus {
      outline: none;
    }
  }
  .legal-consent-container {
    ul {
      padding: 0;
    }
  }
  .hs-form-booleancheckbox {
    margin-top: ${({ theme: { spacing } }) => spacing.l};
    text-align: left;
    color: ${({ theme: { colours } }) => colours.primary.white};
    list-style: none;
    & > label {
      display: flex;
      align-items: center;
      & > input {
        width: fit-content;
        margin: 0;
      }
    }
  }
  .hs-message > label {
    display: none;
  }
  .hs-input[name="message"] {
    margin: 0;
    height: 70px;
  }
  .hs-richtext {
    margin-top: 25px;
  }
  .submitted-message {
    text-align: left;
    padding: 0 150px;
    color: ${({ theme: { colours } }) => colours.primary.white};
    margin-bottom: 200px;

    & > p:first-of-type {
      font-family: "NHaasGroteskDSStd-75Bd", sans-serif;
      font-size: 48px;
      line-height: 48px;
      grid-column: 3/7;
      margin-bottom: 48px;

      ${({ theme: { breakpoints } }) => breakpoints.mobile} {
        font-size: 32px;
        line-height: 32px;
        margin-top: ${({ theme: { spacing } }) => spacing.s};
      }
    }
    & > p:nth-of-type(2) {
      margin-bottom: 32px;
      margin-right: 160px;
      ${({ theme: { breakpoints } }) => breakpoints.mobile} {
      margin-right: 0;
    }
    }
    ${({ theme: { breakpoints } }) => breakpoints.mobile} {
      padding: 0;
    }

    & p > a {
      color: ${({ theme: { colours } }) => colours.primary.purple};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

// This is a bit hacky, but allows 'onFormSubmitted' method to work without jQuery
window.jQuery =
  window.jQuery ||
  (() => ({
    change: () => {},
    trigger: () => {},
  }))

const Form = () => {
  const { loaded, formCreated, error } = useHubspotForm({
    portalId: "9426098",
    formId: "75b4b346-650b-4a87-8b19-12b89d5f632f",
    target: "#hubspot-form",
    onFormSubmitted: function () {
      document
        .getElementById("hs-form-show")
        .setAttribute("style", "display: flex")
      document
        .getElementById("hs-form-hide")
        .setAttribute("style", "display: none")
      document
        .getElementById("hs-form-wrapper")
        .setAttribute("style", "grid-column: 3/10")
    },
  })
  return (
    <Wrapper>
      <StyledGrid>
        <ImageWrapper>
          <HeroImage src={packshot} />
          <MobileImage src={mobile} />
        </ImageWrapper>
        <FormWrapper id="hs-form-wrapper">
          {(loaded && formCreated && (
            <FormContainer id="hubspot-form"></FormContainer>
          )) ||
            (error && (
              <>
                <ErrorHeading>Sorry about that!</ErrorHeading>
                <ErrorSub>
                  The form did not load, please try again later
                </ErrorSub>
                <ButtonWrapper>
                  <TextButton text="Volta home" to="/"></TextButton>
                </ButtonWrapper>
              </>
            ))}
        </FormWrapper>
      </StyledGrid>
    </Wrapper>
  )
}

export default Form
