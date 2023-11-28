import React from 'react'
import { Link } from 'react-scroll'
import {useTranslation} from "react-i18next"
import {Suspense} from "react"


const Intro = () => {
  const {t, i18n} = useTranslation(["intro"])
  return (
    <div className=' bg-eggshell w-full h-screen flex flex-col justify-center items-center p-10'>
     <h1 className='text-4xl p-10'>{t("name")}</h1>
     <p className='text-xl px-24'>{t("presentation")}</p>
     <Link to="projects" smooth={true} duration={500}>
    <p className='h-20 w-64 bg-spacecadet rounded-xl mt-16 flex items-center justify-center text-white hover:bg-indigo hover:cursor-pointer hover:shadow-2xl'>{t("projects")}</p></Link>
    </div>
  )
}

export default Intro