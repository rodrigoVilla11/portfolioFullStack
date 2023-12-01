import React from 'react'
import { Link } from 'react-scroll'

import Skills from './Skills'
import html from '../../assets/image/html.png'
import css from '../../assets/image/css.png'
import js from '../../assets/image/js.png'
import ts from '../../assets/image/ts.png'
import nodejs from '../../assets/image/nodejs.png'
import express from '../../assets/image/express.png'
import postgresql from '../../assets/image/PostgreSQL.png'
import mongodb from '../../assets/image/mongodb.png'
import react from '../../assets/image/react.png'
import redux from '../../assets/image/redux.png'
import tailwind from '../../assets/image/tailwind.png'
import docker from '../../assets/image/docker.png'
import git from '../../assets/image/git.png'
import github from '../../assets/image/github.png'
import {useTranslation} from "react-i18next"




const AboutMe = () => {
  const {t, i18n} = useTranslation(["about"])
  return (
    <div className=' bg-white w-full h-auto flex flex-col'>
        <div className='flex flex-col justify-center items-center p-10'>
        <h2 className='text-4xl p-10 pt-20'>{t("title")}</h2>
        <p className='text-xl md:px-24'>{t("sub-title")}</p>
        </div>
        <div className='flex md:flex-row flex-col p-10'>
        <div className='md:w-1/2 md:p-10'>
        <h3 className='text-2xl pb-5'>{t("know-me")}</h3>
        <p>{t("know-me-p")}</p>
        <Link to="contact" smooth={true} duration={500}>
          <p className='h-20 w-64 bg-spacecadet hover:bg-indigo hover:shadow-2xl hover:cursor-pointer text-white rounded-xl mt-16 flex items-center justify-center'>{t("button")}</p> 
          </Link>
        </div>
        <div className='md:w-1/2 md:p-10 pt-5'>
        <h3 className='text-2xl pb-5'>{t("skills")}</h3>
        <div className='grid grid-cols-4 auto-rows-auto gap-4'>
           <Skills name="HTML" image={html}/>
           <Skills name="CSS" image={css}/>
           <Skills name="JavaScript" image={js}/>
           <Skills name="TypeScript" image={ts}/>
           <Skills name="Node JS"image={nodejs}/>
           <Skills name="Express"image={express}/>
           <Skills name="React" image={react}/>
           <Skills name="Redux" image={redux}/>
           <Skills name="PostgreSQL" image={postgresql}/>
           <Skills name="MongoDB" image={mongodb}/>
           <Skills name="Tailwind" image={tailwind}/>
           <Skills name="Docker" image={docker}/>
           <Skills name="Git" image={git}/>
           <Skills name="Github" image={github}/>

        </div>
        </div>
        </div>
    </div>
  )
}

export default AboutMe