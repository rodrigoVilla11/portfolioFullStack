import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import macbookKitchenCabinet from "../../assets/image/macbookKitchenCabinet.jpg"

import JsIMG from "../../assets/image/js.png"
import HTMLIMG from "../../assets/image/html.png"
import CssIMG from "../../assets/image/css.png"
import ReactIMG from "../../assets/image/react.png"
import ReduxIMG from "../../assets/image/redux.png"
import NodeJsIMG from "../../assets/image/nodejs.png"
import ExpressIMG from "../../assets/image/express.png"
import PostgreSQLIMG from "../../assets/image/PostgreSQL.png"
import {useTranslation} from "react-i18next"



const Project2 = () => {
  const {t, i18n} = useTranslation(["projects"])

  const name = "KITCHEN CABINET"
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
    name: "PostgreSQL",
    img: PostgreSQLIMG
  }] 
  const links ={
    github: "https://github.com/rodrigoVilla11/PI-Food-RodrigoVilla",
    live: "https://pi-food-rodrigo-villa.vercel.app/"
  }
  return (
    <div>
    <IntroProjects name={name} description={t("description_p2")} links={links}/>
    <DetailProjects img={macbookKitchenCabinet} projectOverview={t("projectOverview_p2")} tools={tools} links={links}/>
    </div>
  )
}

export default Project2