import React from "react"
import Playlist from "containers/Playlist"
import TutorialContainer from "containers/TutorialContainer"

export default () => (
  <div id="tutorials/rig/ableton">
    <TutorialContainer
      number={2}
      title="Learn how to set up your rig - Ableton"
      videoId={"nFLenu0SMbA"}
      nextNumber={3}
      nextTitle={"Creative Basics"}
      back
    />
    <Playlist />
  </div>
)
