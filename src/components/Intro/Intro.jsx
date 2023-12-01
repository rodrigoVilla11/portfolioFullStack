import React from 'react'
import { Link } from 'react-scroll'
import {useTranslation} from "react-i18next"
import { saveAs } from 'file-saver';
import cv_english from '../../assets/pdf/CURRICULUM VITAE ESPANOL 28-11-2023.pdf';
import cv_spanish from '../../assets/pdf/CURRICULUM VITAE INGLES 28-11-2023.pdf';
import logo_rnv from "../../assets/logos/logo-RNV-removebg-preview.png"


const Intro = () => {
  const {t, i18n} = useTranslation(["intro"])
  
    const handleDownload = () => {
      if(i18n.language === "en"){
        saveAs(cv_spanish, 'cv_rodrigo_villarreal.pdf'); 
      }else if(i18n.language === "es"){
        saveAs(cv_english, 'cv_rodrigo_villarreal.pdf'); 
      }
    };


  return (
    <div className=' bg-eggshell w-full h-screen flex flex-col justify-center items-center p-10'>
      <img className="" src={logo_rnv}/>
     <h1 className='text-xl md:text-4xl md:pt-10'>{t("name")}</h1>
     <p className='text-md md:text-xl md:px-24'>{t("presentation")}</p>
     <div className='flex flex-col md:flex-row space-y-5 md:space-x-10 md:space-y-0 mt-4'>
     <Link to="projects" smooth={true} duration={500}>
    <p className='h-20 w-64 bg-spacecadet rounded-xl  flex items-center justify-center text-white hover:bg-indigo hover:cursor-pointer hover:shadow-2xl'>{t("projects")}</p></Link>
    <button onClick={handleDownload} className='h-20 w-64 bg-spacecadet rounded-xl flex items-center justify-center text-white hover:bg-indigo hover:cursor-pointer hover:shadow-2xl'>{t("cv")}</button>
    </div>
    </div>
  )
}

export default Intro