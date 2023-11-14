import React from 'react'
import Skills from './Skills'
import html from '../../assets/image/html.png'
import css from '../../assets/image/css.png'
import js from '../../assets/image/js.png'
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
    <div className=' bg-white w-full h-auto flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center p-10'>
        <h2 className='text-4xl p-10'>ABOUT ME</h2>
        <p className='text-xl px-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maiores. Illum impedit, odio dolorum sit numquam provident corporis, temporibus unde quod nisi, nemo fuga non. Laboriosam non mollitia quasi sed.</p>
        </div>
        <div className='flex p-10'>
        <div className='w-1/2 p-10'>
        <h3 className='text-2xl pb-5'>Get to know me!</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sint, rerum veniam nesciunt deleniti voluptatibus ut minus fugit sapiente corrupti numquam, saepe sequi facere? Odio vitae vel vero est beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore obcaecati voluptatum iusto ea, debitis nemo provident similique quisquam nulla voluptate ipsa in saepe? Qui, enim. Natus iure magnam ad.</p>
        <p className='h-20 w-64 bg-spacecadet hover:bg-indigo hover:cursor-pointer text-white rounded-xl mt-16 flex items-center justify-center'>CONTACT</p> 
        </div>
        <div className='w-1/2 p-10'>
        <h3 className='text-2xl pb-5'>My Skills!</h3>
        <div className='grid grid-cols-5 auto-rows-auto gap-4'>
           <Skills name="HTML" image={html}/>
           <Skills name="CSS" image={css}/>
           <Skills name="JavaScript" image={js}/>
           <Skills name="Node JS"image={nodejs}/>
           <Skills name="Express"image={express}/>
           <Skills name="PostgreSQL" image={postgresql}/>
           <Skills name="MongoDB" image={mongodb}/>
           <Skills name="React" image={react}/>
           <Skills name="Redux" image={redux}/>
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