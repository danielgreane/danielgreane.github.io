import React from "react"
import TutorialContainer from "containers/TutorialContainer"
import Playlist from "containers/Playlist"

export default () => (
  <div id="tutorials/module-1/">
    <TutorialContainer
      number={1}
      title="Introduction to Volta"
      videoId={"1Umm8GihjnM"}
      nextNumber={2}
      nextTitle={"Learn how to set up your rig"}
    />
    <Playlist />
  </div>
)
