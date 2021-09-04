import React from "react"
import Hero from "containers/Hero"
import Vision from "containers/Vision"
import ArchiveHero from "containers/ArchiveHero"
import OculusDownload from "containers/OculusDownload"
import NewsletterSignup from "containers/NewsletterSignup"
import UpcomingEvents from "containers/UpcomingEvents"
import RecentPress from "containers/RecentPress"
import RecentArtists from "containers/RecentArtists"
import Endorsements from "containers/Endorsements"
import JoinDiscord from "containers/JoinDiscord"

export default () => (
  <div id="index" style={{ textAlign: "center" }}>
    <Hero />
    <Vision />
    <RecentArtists />
    <UpcomingEvents />
    <ArchiveHero />
    <OculusDownload
      heading="Watch Volta powered performances in VR"
      body="Download Volta in the Oculus store"
      buttonLabelDesktop="Download"
      buttonLabelMobile="Download"
    />
    <Endorsements />
    <RecentPress />
    <JoinDiscord />
    <NewsletterSignup
      heading="Connect with Volta"
      body="Join our newsletter to get upcoming Volta news and performances."
    />
  </div>
)
