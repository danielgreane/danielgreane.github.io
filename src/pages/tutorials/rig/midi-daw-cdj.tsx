import React from "react"
import Playlist from "containers/Playlist"
import TutorialContainer from "containers/TutorialContainer"

export default () => (
  <div id="tutorials/rig/midi-daw-cdj">
    <TutorialContainer
      number={2}
      title="Learn how to set up your rig - generic MIDI/DAW/CDJs"
      videoId={"psozWFyITuk"}
      nextNumber={3}
      nextTitle={"Creative Basics"}
      back
    />
    <Playlist />
  </div>
)
