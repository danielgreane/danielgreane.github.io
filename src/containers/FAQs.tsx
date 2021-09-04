import React from "react"
import StickyBox from "react-sticky-box"
import ReactHtmlParser from "react-html-parser"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import styled from "styled-components"
import { VoltaGrid  } from "../theme/components"
import Triangle from "../icons/purple_triangle.png"
import UseMediaQuery from "../hooks/useMediaQuery"


type Faq = {
  question: string
  answer: string
}

type FaqSection = {
  [key: string]: Faq[]
}

interface FaqProps {
  faqArray: FaqSection
}

const StyledGrid = styled(VoltaGrid)`
  color: ${({ theme: { colours } }) => colours.primary.white};
  overflow-x: unset;
  ${({ theme: { breakpoints } }) => breakpoints.mobile } {
    display: flex;
    flex-direction: column;
  }
`
const StickyWrapper = styled.div`
  padding-top: 215px;
  grid-column: 1/13;
  display: flex;
  align-items: flex-start;
`
const SidebarContainer = styled.div`
  padding-bottom: 128px;
  margin-right: 112px;
  min-width: 280px;
`
const SidebarMenuLink = styled.a`
  color: ${({ theme: { colours } }) => colours.primary.white};

  &:hover {
    color: ${({ theme: { colours } }) => colours.primary.purple};
  }
`
const SidebarMenuItem = styled.h5`
  margin: 0;
  margin-bottom: 8px;
`

const Heading = styled.h1`
  margin-top: 0;
  color: ${({ theme: { colours } }) => colours.primary.white};
`
const Text = styled.p`
  color: ${({ theme: { colours } }) => colours.primary.white};
  text-align: left;
  margin-bottom: 48px;
`

const Wrapper = styled.div`
  grid-column: 1/9;
  padding-bottom: 90px;

  & > h3:not(:first-child) {
    padding-top: 32px;
  }

`
const FaqItemWrapper = styled.div`
  margin-bottom: 64px;
`
const SectionWrapper = styled.div`
  &:before {
    content: "";
    display: block;
    height: 162px;
    margin: -162px 0 0;
  }
`
const Section = styled.h3`
  margin-top: 0;
`
const Question = styled.h4`
  margin: 0;
  margin-bottom: 16px;
`
const Answer = styled.p`
  & > a {
    color: ${({ theme: { colours } }) => colours.primary.purple};

    &:hover {
      text-decoration: underline;
    }
  }
`

const AccordionWrapper = styled.div`
  padding: 144px 32px 100px;
`
const FaqAccordionContainer = styled(Accordion)`
  & > div:last-of-type > div > div {
    border-bottom: 1px solid ${({ theme: { colours } }) => colours.primary.white};
  }

  & > div:last-of-type > div:last-of-type {
    border-top: none;

    & > div {
      border-bottom: none;
    }
  }
`
const FaqAccordionItemHeading = styled(AccordionItemHeading)`
  font-family: 'NHaasGroteskDSStd-75Bd', sans-serif;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0;
`
const FaqAccordionItemButton = styled(AccordionItemButton)`
  position: relative;
  color: ${({ theme: { colours } }) => colours.primary.white};
  padding: 20px 0;
  border-top: 1px solid ${({ theme: { colours } }) => colours.primary.white};

  @keyframes expand {
    0% {transform: rotate(0);}
    100% {transform: rotate(-90deg);}
  }

  @keyframes collapse {
    0% {transform: rotate(-90deg);}
    100% {transform: rotate(0);}
  }

  &:after {
    content: "";
    background-image: url(${Triangle});
    display: inline-block;
    position: absolute;
    top: calc(50% - 9px);
    right: 0;
    height: 20px;
    width: 17px;
  }

  &[aria-expanded="true"]:after {
    animation: expand 0.1s ease-in forwards normal 1;
  }
  &[aria-expanded="false"]:after {
    animation: collapse 0.1s ease-in forwards normal 1;
  }

`
const FaqAccordionItemPanel = styled(AccordionItemPanel)`
  color: ${({ theme: { colours } }) => colours.primary.white};
  padding-top: 44px;
  border-top: 1px solid ${({ theme: { colours } }) => colours.primary.white};
`

const FaqHeading = () => {
  return (
    <>
      <Heading>FAQs</Heading>
      <Text>
        Popular questions around Volta, our products and platform
      </Text>
    </>
  )
}

const FaqSidebar = ({faqArray}: FaqProps) => {
  return (
    <SidebarContainer>
      <FaqHeading />
      {Object.keys(faqArray).map((section, i) => (
        <SidebarMenuLink
          key={i}
          href={`#${section.toLowerCase().split(" ").join("-")}`}
        >
          <SidebarMenuItem>{section}</SidebarMenuItem>
        </SidebarMenuLink>
      ))}
    </SidebarContainer>
  )
}

const StickyFaq = ({faqArray}: FaqProps) => {
  // Removing "overflow-x: hidden" style from body as it interferes with sticky box
  // window.document.body.style.overflowX = "unset"
  return (
    <StyledGrid>
      <StickyWrapper>
        <StickyBox offsetTop={160} offsetBottom={20}>
          <FaqSidebar faqArray={faqArray}/>
        </StickyBox>
        <Wrapper>
        {Object.keys(faqArray).map((section, i) => (
          <>
            <SectionWrapper
              id={section.toLowerCase().split(" ").join("-")}
              key={i}
            >
              <Section>
                {section}
              </Section>
            </SectionWrapper>
            {faqArray[section].map((faq, i) => (
              <FaqItemWrapper key={i}>
                <Question>{faq.question}</Question>
                <Answer>{ReactHtmlParser(faq.answer)}</Answer>
              </FaqItemWrapper>
            ))}
          </>
        ))}
        </Wrapper>
      </StickyWrapper>
    </StyledGrid>
  )
}

const FaqAccordion = ({faqArray}: FaqProps) => {
  return (
    <AccordionWrapper>
      <FaqHeading />
      <FaqAccordionContainer
        allowMultipleExpanded={true}
        allowZeroExpanded={true}
      >
        {Object.keys(faqArray).map((section, i) => (
          <AccordionItem key={i} >
            <FaqAccordionItemHeading>
              <FaqAccordionItemButton>
                {section}
              </FaqAccordionItemButton>
            </FaqAccordionItemHeading>
            <FaqAccordionItemPanel>
            {faqArray[section].map((faq, i) => (
              <FaqItemWrapper key={i}>
                <Question>{faq.question}</Question>
                <Answer>{ReactHtmlParser(faq.answer)}</Answer>
              </FaqItemWrapper>
            ))}
            </FaqAccordionItemPanel>
          </AccordionItem>
        ))}
      </FaqAccordionContainer>
    </AccordionWrapper>
  )
}

const FAQs = ({faqArray}: FaqProps) => {
  const isMobile = UseMediaQuery('(max-width: 768px)')
  return(
    isMobile ? (
      <FaqAccordion faqArray={faqArray} />
    ) : (
      <StickyFaq faqArray={faqArray} />
    )
  )
}

export default FAQs
