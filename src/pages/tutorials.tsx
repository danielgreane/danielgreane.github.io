import React from "react"
import TutorialHeader from "containers/TutorialHeader"
import GettingStarted from "containers/GettingStarted"
import MoreTutorials from "containers/MoreTutorials"


const youtubeIdArray = [
  {
    videoId: "1Umm8GihjnM",
    alt: "Introduction and the basics",
    modulePath: "module-1",
  },
  {
    videoId: "nFLenu0SMbA",
    alt: "Connecting to Ableton",
    modulePath: "rig/ableton",
  },
  {
    videoId: "JGoX2nkhkqk",
    alt: "Connecting to Traktor",
    modulePath: "rig/traktor",
  },
  {
    videoId: "psozWFyITuk",
    alt: "Connecting Volta to generic MIDI/DAW/CDJs",
    modulePath: "rig/midi-daw-cdj",
  },
  {
    videoId: "UXGkx9Z-BIQ",
    alt: "Creative Basics",
    modulePath: "module-3"
  },
  {
    videoId: "m4JmNZUWefA",
    alt: "Special Elements",
    modulePath: "module-4"
  }
]

export default () => (
  <div id="tutorials">
    <TutorialHeader path="all"/>
    <GettingStarted />
    <MoreTutorials youtubeIdArray={youtubeIdArray} />
  </div>
)
