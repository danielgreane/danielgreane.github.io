import React from "react"
import LiveStream from "containers/LiveStream"
import Experiences from "containers/Experiences"
import Survey from "containers/Survey"
import OculusDownload from "containers/OculusDownload"
import NewsletterSignup from "containers/NewsletterSignup"
import JoinDiscord from "containers/JoinDiscord"



export default () => (
  <div id="performances" style={{ textAlign: "center" }}>
    <LiveStream />
    <Experiences />
    <Survey />
    <OculusDownload
      heading="Experience this and our upcoming events in VR"
      body="Get our free app and experience Volta in VR"
      buttonLabelDesktop="Get Volta"
      buttonLabelMobile="Get Volta"
    />
    <JoinDiscord />
    <NewsletterSignup
      heading="Connect with Volta"
      body="Join our newsletter to get upcoming Volta news, features, and performances."
    />
  </div>
)
