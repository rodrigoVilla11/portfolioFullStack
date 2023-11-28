import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import macbookStarWars from "../../assets/image/macbookStarWars.jpg"

import JsIMG from "../../assets/image/js.png"
import HTMLIMG from "../../assets/image/html.png"
import CssIMG from "../../assets/image/css.png"
import ReactIMG from "../../assets/image/react.png"
import ReduxIMG from "../../assets/image/redux.png"
import NodeJsIMG from "../../assets/image/nodejs.png"
import ExpressIMG from "../../assets/image/express.png"
import MongoIMG from "../../assets/image/mongodb.png"
import DockerIMG from "../../assets/image/docker.png"
import TailwindIMG from "../../assets/image/tailwind.png"
import {useTranslation} from "react-i18next"



const Project3 = () => {
  const {t, i18n} = useTranslation(["projects"])

  const name = "STAR WARS APP"
  
  const tools = [{
    name: "HTML",
    img: HTMLIMG
  },{
    name: "JavaScript",
    img: JsIMG
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
  },{
    name: "Tailwind",
    img: TailwindIMG
  },{
    name: "Docker",
    img: DockerIMG
  }] 
  const links ={
    github: "https://github.com/rodrigoVilla11/star_wars_api_microservices",
    live: "https://star-wars-front-theta.vercel.app/"
  }
  return (
    <div>
    <IntroProjects name={name} description={t("description_p3")} links={links}/>
    <DetailProjects img={macbookStarWars} projectOverview={t("projectOverview_p3")} tools={tools} links={links}/>
    </div>
  )
}

export default Project3