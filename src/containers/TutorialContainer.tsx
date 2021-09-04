import React from "react"
import TutorialHeader from "containers/TutorialHeader"
import TutorialModules from "containers/TutorialModules"
import NextUp from "containers/NextUp"
import RigModule from "components/RigModule"
import { VideoArrayObject } from "components/VideoCarousel"

interface TutorialContainerProps {
  number: number
  title: string
  videoId?: string
  nextNumber?: number
  nextTitle?: string
  rigModule?: boolean
  back?: boolean
  youtubeIdArray?: VideoArrayObject[]
}

const TutorialContainer = ({
  number,
  title,
  videoId,
  nextNumber,
  nextTitle,
  rigModule,
  back,
  youtubeIdArray
}: TutorialContainerProps) => {
  return (
    <>
      <TutorialHeader path="get-started" />
      {rigModule ? (
        <RigModule
          number={number}
          title={title}
          youtubeIdArray={youtubeIdArray}
        />
      ) : (
        <TutorialModules
          number={number}
          title={title}
          videoId={videoId}
          back={back}
        />
      )}
      <NextUp number={nextNumber} title={nextTitle}/>
    </>
  )
}

export default TutorialContainer
