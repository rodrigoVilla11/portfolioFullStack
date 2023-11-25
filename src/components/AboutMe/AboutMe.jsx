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




const aboutMe = () => {
  return (
    <div className=' bg-white w-full h-auto flex flex-col'>
        <div className='flex flex-col justify-center items-center p-10'>
        <h2 className='text-4xl p-10 pt-20'>ABOUT ME</h2>
        <p className='text-xl px-24'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div className='flex p-10'>
        <div className='w-1/2 p-10'>
        <h3 className='text-2xl pb-5'>Get to know me!</h3>
        <p>I am a passionate full-stack developer with a comprehensive focus on creating exceptional digital experiences. My expertise spans from designing and developing the frontend using technologies like React and Redux to implementing robust servers in the backend with Node.js and Express. With skills in databases such as MongoDB and PostgreSQL, I have worked on diverse projects ranging from web applications to scalable solutions using microservices architectures. My goal is to always merge design elegance with solid functionality, delivering solutions that not only meet user needs but also excel in code efficiency and system scalability. I am excited to continue building the digital future and exploring new opportunities that challenge and expand my skills as a full-stack developer.</p>
        <Link to="contact" smooth={true} duration={500}>
          <p className='h-20 w-64 bg-spacecadet hover:bg-indigo hover:shadow-2xl hover:cursor-pointer text-white rounded-xl mt-16 flex items-center justify-center'>CONTACT</p> 
          </Link>
        </div>
        <div className='w-1/2 p-10'>
        <h3 className='text-2xl pb-5'>My Skills!</h3>
        <div className='grid grid-cols-5 auto-rows-auto gap-4'>
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

export default aboutMe