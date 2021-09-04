import React from "react"
import Playlist from "containers/Playlist"
import TutorialContainer from "containers/TutorialContainer"

const moduleArray = [
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
  }
]

export default () => (
  <div id="tutorials/module-2/">
    <TutorialContainer
      number={2}
      title="Learn how to set up your rig"
      rigModule
      youtubeIdArray={moduleArray}
      nextNumber={3}
      nextTitle={"Creative Basics"}
    />
    <Playlist />
  </div>
)
