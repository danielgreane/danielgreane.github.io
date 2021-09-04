import React, { useState } from "react"
import axios from "axios"
import InputField from "./input-field"
import styled from "styled-components"

const checkValidEmail = (email: string): boolean => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const SignupInput = () => {
  const [responseText, setResponseText] = useState(undefined)
  const NEWSLETTER_SIGNUP_LIST_ID = 3

  const signUp = (email: string) => {
    checkValidEmail(email)
      ? axios({
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": process.env.SENDINBLUE_API_KEY,
          },
          url: "https://api.sendinblue.com/v3/contacts",
          data: {
            listIds: [NEWSLETTER_SIGNUP_LIST_ID],
            updateEnabled: true,
            email,
          },
        })
          .then(function (response) {
            if (response.status === 201 || response.status === 204) {
              setResponseText(
                "Thanks for adding your email, we’ll be in touch!"
              )
            }
          })
          .catch(function (_) {
            setResponseText(
              "An unexpected error occurred, please try again later"
            )
          })
      : setResponseText("That looks like an invalid email, please try again")
  }

  const ResponseContainter = styled.div`
    height: 20px;
    margin-top: 18px;
  `

  const ResponseText = styled.body`
    color: white;
    background-color: transparent;
    text-align: left;
    font-size: ${({ theme: { text } }) => text.smallFont};
    line-height: ${({ theme: { text } }) => text.smallLineHeight};
  `

  return (
    <>
      <InputField placeholder={"Please enter your email"} onClick={signUp} />
      <ResponseContainter>
        <ResponseText>{responseText || ""}</ResponseText>
      </ResponseContainter>
    </>
  )
}

export default SignupInput
