import React from "react"
import styled from "styled-components"
import theme from "../theme/"
import { VoltaGrid } from "../theme/components"

type RoadmapCircleIconProp = {
  iconColor: string
}

type RoadmapTopicObject = {
  id?: string
  topic: string
  details: string
}

type RoadmapDetailsObject = {
  title: string
  iconColor: string
  roadmapArray: RoadmapTopicObject[]
}

interface RoadmapDetailsProps {
  roadmapObj: RoadmapDetailsObject
}

const StyledGrid = styled(VoltaGrid)`
  color: ${theme.colours.primary.white};
  ${theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`
const TextContainer = styled.div`
  grid-column: 1/7;
  padding: 120px 0 82px;
  ${theme.breakpoints.mobile} {
    margin: 0 32px;
  }
`
const Heading = styled.h3``
const Sub = styled.p``
const StyledA = styled.a`
  color: ${theme.colours.primary.purple};

  &:hover {
    text-decoration: underline;
  }
`
const RoadmapOuterWrapper = styled(VoltaGrid)`
  width: 100%;
  grid-column: 1/13;

  div:nth-child(odd) {
    grid-column: 1/7;
  }
  div:nth-child(even) {
    grid-column: 7/13;
  }

  ${theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`
const RoadmapContainerWrapper = styled.div`
  background-color: ${theme.colours.primary.black};
  ${theme.breakpoints.mobile} {
    padding: 0 32px;
  }
`
const RoadmapHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 48px 90px;
  border-bottom: 1px solid #C3C3C5;
  ${theme.breakpoints.mobile} {
    padding: 48px 16px;
  }
`
const RoadmapCircleIcon = styled.div<RoadmapCircleIconProp>`
  height: 41px;
  width: 41px;
  border-radius: 100%;
  background-color: ${props => props.iconColor};
`
const RoadmapCircleHeading = styled.h4`
  margin: 0;
  margin-left: 28px;
`
const RoadmapList = styled.li`
  padding: 48px 78px;
  list-style: none;
  ${theme.breakpoints.mobile} {
    padding: 48px 0;
  }
`
const RoadmapItem = styled.ul`
  padding: 0;
  margin: 16px 0;
  font-family: 'NHaasGroteskDSStd-75Bd';
`
const StyledLink = styled.a`
  color: ${theme.colours.primary.white};

  &:hover {
    text-decoration: underline;
  }
`

const RoadmapDetailsWrapper = styled.div`
  grid-column: 1/9;
  margin-bottom: 120px;
  ${theme.breakpoints.mobile} {
    margin: 0 32px;
  }
`
const RoadmapDetailsContainer = styled.div`
  margin: 80px 0;
`
const RoadmapDetailHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
`
const RoadmapDetailItem = styled.div`
  &:before {
    content: "";
    display: block;
    height: 162px;
    margin: -162px 0 0;
  }
`
const RoadmapDetailHeading = styled.h4`
  margin-top: 0;
`
const RoadmapDetailText = styled.p`
  margin-bottom: 64px;
`



const RoadmapContainer = ({
  roadmapObj
}: RoadmapDetailsProps) => {
  return (
    <RoadmapContainerWrapper>
      <RoadmapHeader>
        <RoadmapCircleIcon iconColor={roadmapObj.iconColor}/>
        <RoadmapCircleHeading>{roadmapObj.title}</RoadmapCircleHeading>
      </RoadmapHeader>
      <RoadmapList>
        {roadmapObj.roadmapArray.map((item, i) => (
          <StyledLink href={`#${item.id}`}>
            <RoadmapItem key={i}>{item.topic}</RoadmapItem>
          </StyledLink>
        ))}
      </RoadmapList>
    </RoadmapContainerWrapper>
  )
}

const RoadmapDetails = ({
  roadmapObj
}: RoadmapDetailsProps) => {
  return (
    <RoadmapDetailsContainer>
      <RoadmapDetailHeader>
        <RoadmapCircleIcon iconColor={roadmapObj.iconColor} />
        <RoadmapCircleHeading>{roadmapObj.title}</RoadmapCircleHeading>
      </RoadmapDetailHeader>
        {roadmapObj.roadmapArray.map((item, i) => (
            <RoadmapDetailItem id={item.id} key={i}>
              <RoadmapDetailHeading >{item.topic}</RoadmapDetailHeading>
              <RoadmapDetailText>{item.details}</RoadmapDetailText>
            </RoadmapDetailItem>
        ))}
    </RoadmapDetailsContainer>
  )
}

const inProgressObj = {
  title: "In progress",
  iconColor: theme.colours.primary.purple,
  roadmapArray: [
    {
      id: "in-progress-1",
      topic: "Camera control",
      details: "Introducing new ways for you to curate your own camera angles for your streams and recordings"
    },
    {
      id: "in-progress-2",
      topic: "Enhanced updating",
      details: "Automatic updates within Volta Create so that you have the latest features and creatives at your fingertips"
    },
    {
      id: "in-progress-3",
      topic: "Enhanced Creative",
      details: "Build worlds from scratch, make combinations of Elements & Behaviours never seen before. Easily share your world and mix & match elements from any other world!"
    },
    {
      id: "in-progress-4",
      topic: "Improved DJ support",
      details: "Creating new worlds and elements for DJ's"
    },
    {
      id: "in-progress-5",
      topic: "More DAW Support",
      details: "Native support for Rekordbox, Serato, Logic and more"
    },
    {
      id: "in-progress-6",
      topic: "Fan Engagements",
      details: "Allowing your fans to co-create with you as you perform and have an influence on the world. You’ll even be able to charge them directly for things like shout outs!"
    },
  ]
}

const plannedObj = {
  title: "Planned",
  iconColor: "#F5A623",
  roadmapArray: [
    {
      id: "planned-1",
      topic: "Built-in Max patches",
      details: "So you no longer need to download additional patches"
    },
    {
      id: "planned-2",
      topic: "VR streaming",
      details: "Introducing the ability to simultaneously stream your performances to our Oculus app at the same time as your 2D streams. Will include new ways for audiences to interact in VR with your performance"
    },
    {
      id: "planned-3",
      topic: "New onboarding flows",
      details: "Enhanced ways for us to guide you through the creative process within Volta, including in-app product tours and a more comprehensive help centre"
    },
    {
      id: "planned-4",
      topic: "3D Asset Upload",
      details: "Ability to upload most 3D asset files (including CAD) to enable even more customisations and creativity"
    },
    {
      id: "planned-5",
      topic: "Direct MIDI enhancements",
      details: "New features to help seamlessly link MIDI in Volta Create, including MIDI Learn mode"
    },
    {
      id: "planned-6",
      topic: "Community centre",
      details: "Allows Volta artists to share their worlds and creative inspirations with one another"
    },
    {
      id: "planned-7",
      topic: "UX enhancements and optimisation",
      details: "We're excited to see and hear how you use our software and will be developing learnings into new features"
    },
    {
      id: "planned-8",
      topic: "Social Interaction",
      details: "Helping fans join as groups of friends whom can communicate with one another, for a more engaging experience"
    },
  ]
}

const Roadmap = () => {
  return (
    <StyledGrid>
      <TextContainer>
        <Heading id="roadmap">
          Upcoming plans for features and upgrades
        </Heading>
        <Sub>
          We'd love to co-create the platform with you! Make sure to leave your feedback and suggestions on our Discord channel <StyledA href="https://discord.gg/R9aYJ6rNtJ" target="_blank">here</StyledA>
        </Sub>
      </TextContainer>
      <RoadmapOuterWrapper>
        <RoadmapContainer roadmapObj={inProgressObj} />
        <RoadmapContainer roadmapObj={plannedObj} />
      </RoadmapOuterWrapper>
      <RoadmapDetailsWrapper>
        <RoadmapDetails roadmapObj={inProgressObj} />
        <RoadmapDetails roadmapObj={plannedObj} />
      </RoadmapDetailsWrapper>
    </StyledGrid>
  )
}

export default Roadmap
