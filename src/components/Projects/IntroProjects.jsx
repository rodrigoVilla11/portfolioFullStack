import React from 'react'
import {useTranslation} from "react-i18next"

const IntroProjects = (props) => {
  const {t, i18n} = useTranslation(["projects"])
  return (
    <div className=' bg-eggshell w-full h-screen flex flex-col justify-center items-center p-10'>
    <h1 className='text-4xl p-10'>{props.name}</h1>
    <p className='text-xl px-24'>{props.description}</p>
    <a target="_blank"  href={props.links.live}>
   <p className='h-20 w-64 bg-spacecadet rounded-xl hover:shadow-2xl mt-16 flex items-center justify-center text-white hover:bg-indigo hover:cursor-pointer'>{t("button_live")}</p>
   </a>
   </div>
  )
}

export default IntroProjects