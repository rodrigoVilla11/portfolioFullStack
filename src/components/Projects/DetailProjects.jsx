import React from 'react'
import Skills from '../AboutMe/Skills'
import react from "../../assets/image/react.png"
import {useTranslation} from "react-i18next"

const DetailProjects = (props) => {
  const {t, i18n} = useTranslation(["projects"])
  return (
    <div className='w-full h-auto flex flex-col items-center'>
        <div className='w-4/5'>
            <img src={props.img} alt={props.name}/>
        </div>
        <div className='w-4/5'>
            <h2 className='text-2xl py-10 md:px-10'>{t("project_overview")}</h2>
            <p className='text-xl md:px-24'>{props.projectOverview}</p>
        </div>
        <div className='w-4/5'>
            <h2 className='text-2xl py-10 md:px-10'>{t("tools")}</h2>
            <div className='md:px-24 grid grid-cols-3 md:grid-cols-5 auto-rows-auto gap-4'>
            {props.tools&&props.tools.map((tool)=>{
                return <Skills name={tool.name} image={tool.img}/>
            })}
            </div>
        </div>
        <div className='w-4/5'>
        <h2 className='text-2xl py-10 md:px-10'>Links</h2>
        <div className='flex md:flex-row flex-col items-center'>
        <a target="_blank" href={props.links.github}>
        <p className='h-20 w-64 bg-spacecadet rounded-xl  flex items-center justify-center hover:shadow-2xl text-white hover:bg-indigo hover:cursor-pointer md:mx-24 mb-10'>REPO</p>
        </a>
        <a target="_blank" href={props.links.live}>
        <p className='h-20 w-64 bg-spacecadet rounded-xl  flex items-center justify-center hover:shadow-2xl text-white hover:bg-indigo hover:cursor-pointer mb-10'>{t("button_live")}</p>   
        </a></div>
        </div>
    </div>
  )
}

export default DetailProjects