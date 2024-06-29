import React from 'react'
import macbookSixCircles from "../../assets/image/macbookSixCircles.jpg"
import macbookKitchenCabinet from "../../assets/image/macbookKitchenCabinet.jpg"
import macbookSake from "../../assets/image/macbookSake.jpg"
import macbookBlue from "../../assets/image/macbookBlue.jpg"
import macbookStarWars from "../../assets/image/macbookStarWars.jpg"
import {useTranslation} from "react-i18next"
import Project from './Project'

const Projects = (props) => {
  const {t, i18n} = useTranslation(["projects"])
  return (
    <div className='bg-white w-full h-auto flex flex-col justify-center items-center p-10'>
        <h2 className='p-10 text-4xl  pt-20'>{t("title")}</h2>
        <p className=' text-xl md:px-24'>{t("sub_title")}</p>
        <div className='grid grid-cols-1 gap-4 w-full pt-10 md:p-10'>
        <Project name="SAKE SUSHI" description={t("description_p5")} img={macbookSake} linkTo="/project5" linkLive="https://web-sake.vercel.app/"/>
        <Project name="BLUE APPLE" description={t("description_p4")} img={macbookBlue} linkTo="/project4" linkLive="https://blue-apple-pied.vercel.app/"/>
        <Project name="SIX CIRCLES" description={t("description_p1")} img={macbookSixCircles} linkTo="/project1" linkLive="https://pf-sixcircles-front.vercel.app/"/>
        <Project name="KITCHEN CABINET" description={t("description_p2")} img={macbookKitchenCabinet} linkTo="/project2" linkLive="https://pi-food-rodrigo-villa.vercel.app/"/>
        <Project name="STAR WARS APP" description={t("description_p3")} img={macbookStarWars} linkTo="/project3" linkLive="https://star-wars-front-theta.vercel.app/"/>
    </div>
    </div>
  )
}

export default Projects