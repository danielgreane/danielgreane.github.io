import React from "react"
import GenericHeader from "containers/GenericHeader"
import VoltaCreateDownload from "containers/VoltaCreateDownload"
import Guides from "containers/Guides"
import OculusDownload from "containers/OculusDownload"
import Roadmap from "containers/Roadmap"
import SurveyNew from "containers/SurveyNew"

const includesArray = [
  "First public release of our beta - XR creation, editing and broadcasting software",
  "Includes 4 immersive environments - including one supporting LiDAR",
  "Direct support for Ableton and Traktor + additional support for any DAW or MIDI controller",
  "Built-in audio analysis and reactivity",
]

export default () => (
  <div id="downloads">
    <GenericHeader
      heading="Downloads"
      text="Find all the latest updates, patches and view upcoming Volta features on our product roadmap"
    />
    <VoltaCreateDownload
      version={0.7}
      updateDate="02/09/2021"
      includes={includesArray}
    />
    <Guides />
    <OculusDownload
      heading="Download Volta in the Oculus Store"
      body="Watch all the Volta powered performances in VR"
      buttonLabelDesktop="Download"
      buttonLabelMobile="Download"
    />
    <Roadmap />
    <SurveyNew />
  </div>
)
