import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import macbookSake from "../../assets/image/macbookSake.jpg"

import TsIMG from "../../assets/image/ts.png"
import TaildwindIMG from "../../assets/image/tailwind.png"
import NextJsIMG from "../../assets/image/next.png"
import ReduxIMG from "../../assets/image/redux.png"
import NestJsIMG from "../../assets/image/nest.png"
import MongoDbIMG from "../../assets/image/mongodb.png"
import {useTranslation} from "react-i18next"




const Project5 = () => {
  const {t, i18n} = useTranslation(["projects"])

  const name = "SAKE SUSHI APP"

  const tools = [{
    name: "TypeScript",
    img: TsIMG
  },{
    name: "Taildwind",
    img: TaildwindIMG
  },{
    name: "Next JS",
    img: NextJsIMG
  },{
    name: "Redux TK",
    img: ReduxIMG
  },{
    name: "Nest JS",
    img: NestJsIMG
  },{
    name: "MongoDb",
    img: MongoDbIMG
  }] 
  const links ={
    github: "https://github.com/rodrigoVilla11/web-sake",
    live: "https://web-sake.vercel.app/"
  }
  return (
    <div>
    <IntroProjects name={name} description={t("description_p5")} links={links}/>
    <DetailProjects img={macbookSake} projectOverview={t("projectOverview_p5")} tools={tools} links={links}/>
    </div>
  )
}

export default Project5