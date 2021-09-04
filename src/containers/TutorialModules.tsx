import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import SimpleButton from "../components/Button/simple-button"
import EmbedVideo from "components/EmbedVideo"

type BackType = {
  back?: boolean
}

interface ModuleHeaderProps {
  number: number
  title: string
}

interface EmbedContainerProps {
  videoId: string
  back?: boolean
}

interface TutorialModuleProps extends ModuleHeaderProps {
  videoId: string
  back?: boolean
}

const StyledGrid = styled(VoltaGrid)`
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const ModuleHeaderWrapper = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ModuleHeadingWrapper = styled.div``
const ModuleHeading = styled.h4``
const ButtonWrapper = styled.div`
  width: 153px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
  }
`

export const EmbedVideoWrapper = styled.div<BackType>`
  grid-column: 1/13;
  height: 625px;
  margin-bottom: ${props => props.back ? "14px" : "112px"};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: calc(((100vw)/16)*9);
    margin-bottom: 0;
  }
`
const Wrapper = styled.div`
  grid-column: 1/13;
  padding-bottom: 64px;
  display: flex;
  justify-content: space-between;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
    align-items: flex-end;
  }
`
const ButtonWrapper2 = styled.div`
  width: 182px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 32px;
  }
`
const ButtonWrapper3 = styled.div`
  width: 153px;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    display: none;
  }
`

export const ModuleHeader = ({
  number,
  title
}: ModuleHeaderProps) => {
  return (
    <ModuleHeaderWrapper>
      <ModuleHeadingWrapper>
        <ModuleHeading>Module {number}</ModuleHeading>
        <ModuleHeading>{title}</ModuleHeading>
      </ModuleHeadingWrapper>
      <ButtonWrapper>
        <SimpleButton text="VIEW ALL VIDEOS" to="/tutorials" color="white" small />
      </ButtonWrapper>
    </ModuleHeaderWrapper>
  )
}

const EmbedVideoContainer = ({
  videoId,
  back
}: EmbedContainerProps) => {
  return (
    <EmbedVideoWrapper back={back}>
      <EmbedVideo url={videoId} />
    </EmbedVideoWrapper>
  )
}

const TutorialModules = ({
  number,
  title,
  videoId,
  back
}: TutorialModuleProps) => {
  return (
    <StyledGrid>
      <ModuleHeader number={number} title={title} />
      <EmbedVideoContainer videoId={videoId} back/>
      <Wrapper>
        {back ? (
          <ButtonWrapper2>
            <SimpleButton text="BACK TO ALL RIG" to="/tutorials/module-2" color="white" small arrow />
          </ButtonWrapper2>
        ) : null}
        <ButtonWrapper3>
          <SimpleButton text="VIEW ALL VIDEOS" to="/tutorials" color="white" small />
        </ButtonWrapper3>
      </Wrapper>
    </StyledGrid>
  )
}

export default TutorialModules
