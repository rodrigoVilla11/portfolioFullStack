import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import macbookBlue from "../../assets/image/macbookBlue.jpg"

import TsIMG from "../../assets/image/ts.png"
import TailwindIMG from "../../assets/image/tailwind.png"
import NextJSIMG from "../../assets/image/next.png"
import {useTranslation} from "react-i18next"




const Project4 = () => {
  const {t, i18n} = useTranslation(["projects"])

  const name = "BLUE APPLE"

  const tools = [,{
    name: "TypeScript",
    img: TsIMG
  },{
    name: "Next JS",
    img: NextJSIMG
  },{
    name: "Tailwind",
    img: TailwindIMG
  }] 
  const links ={
    github: "https://github.com/rodrigoVilla11/blueApple",
    live: "https://blue-apple-pied.vercel.app/"
  }
  return (
    <div>
    <IntroProjects name={name} description={t("description_p4")} links={links}/>
    <DetailProjects img={macbookBlue} projectOverview={t("projectOverview_p4")} tools={tools} links={links}/>
    </div>
  )
}

export default Project4