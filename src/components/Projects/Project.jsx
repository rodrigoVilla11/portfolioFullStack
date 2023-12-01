import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useTranslation} from "react-i18next"


const Project = (props) => {
  const {t, i18n} = useTranslation(["projects"])

  const [isButtonVisible, setButtonVisible] = useState(false)
  
  return (
    <div>  <div className='flex flex-col md:flex-row w-full h-auto relative'>
    <div onMouseEnter={() => setButtonVisible(true)} 
        onMouseLeave={() => setButtonVisible(false)} className='border-8 border-indigo bg-indigo md:w-1/2 rounded-t-xl md:rounded-l-xl md:rounded-tr-none hover:cursor-pointer flex justify-center items-center realtive z-10'>
        <img className={`h-full z-0 ${isButtonVisible ? 'blur-sm' : ''}`}  src={props.img} alt={props.name} />
        {isButtonVisible && (
          <div className='absolute z-20'>
            <a target="_blank" href={props.linkLive}>
              <p className='m-10 h-20 w-64 bg-spacecadet hover:shadow-2xl hover:bg-dogwoodrose hover:cursor-pointer text-white rounded-xl flex items-center justify-center'>
              {t("button_live")}
              </p>
            </a>
          </div>
        )}
        </div>
    <div className='bg-indigo md:w-1/2 rounded-b-xl md:rounded-r-xl md:rounded-bl-none  text-white flex flex-col items-center'>
        <h3 className='text-3xl p-10'>{props.name}</h3>
        <p className=' text-sm px-10 '>{props.description}</p>
        <Link to={props.linkTo}>
        <p className='md:m-10 md:mt-14 m-4 md:h-20 h-10 w-32 md:w-64 hover:shadow-2xl bg-spacecadet hover:bg-dogwoodrose hover:cursor-pointer text-white rounded-xl flex items-center justify-center'>{t("case_study")}</p></Link>
    </div>
</div></div>
  )
}

export default Project

