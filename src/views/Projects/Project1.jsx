import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import maxbookSixCircles from "../../assets/image/macbookSixCircles.jpg"

import JsIMG from "../../assets/image/js.png"
import TsIMG from "../../assets/image/ts.png"
import HTMLIMG from "../../assets/image/html.png"
import CssIMG from "../../assets/image/css.png"
import ReactIMG from "../../assets/image/react.png"
import ReduxIMG from "../../assets/image/redux.png"
import NodeJsIMG from "../../assets/image/nodejs.png"
import ExpressIMG from "../../assets/image/express.png"
import MongoIMG from "../../assets/image/mongodb.png"
import {useTranslation} from "react-i18next"


const Project1 = () => {
  const {t, i18n} = useTranslation(["projects"])
  const name = "SIX CIRCLES"

  const tools = [{
    name: "HTML",
    img: HTMLIMG
  },{
    name: "JavaScript",
    img: JsIMG
  },{
    name: "TypeScript",
    img: TsIMG
  },{
    name: "Css",
    img: CssIMG
  },{
    name: "React",
    img: ReactIMG
  },{
    name: "Redux",
    img: ReduxIMG
  },{
    name: "NodeJS",
    img: NodeJsIMG
  },{
    name: "Express",
    img: ExpressIMG
  },{
    name: "MongoDB",
    img: MongoIMG
  }] 
  const links ={
    github: "https://github.com/six-circles",
    live: "https://pf-sixcircles-front.vercel.app/"
  }
  return (
    <div>
    <IntroProjects name={name} description={t("description_p1")} links={links}/>
    <DetailProjects img={maxbookSixCircles} projectOverview={t("projectOverview_p1")} tools={tools} links={links}/>
    </div>
  )
}

export default Project1