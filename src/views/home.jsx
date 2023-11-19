import React from 'react'
import Intro from '../components/Intro/Intro'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import {Element} from 'react-scroll'


const home = () => {
  return (
    <div>
       <Element name="intro">
        <Intro />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  )
}

export default home