import React from "react"
import Playlist from "containers/Playlist"
import TutorialContainer from "containers/TutorialContainer"

export default () => (
  <div id="tutorials/module-4/">
    <TutorialContainer
      number={3}
      title="Creative Basics"
      videoId={"UXGkx9Z-BIQ"}
      nextNumber={4}
      nextTitle={"Module 4 title"}
    />
    <Playlist />
  </div>
)
