import React from 'react'
import Skills from './Skills'

const aboutMe = () => {
  return (
    <div className=' bg-white w-full h-auto flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center p-10'>
        <h2 className='text-4xl p-10'>ABOUT ME</h2>
        <p className='text-xl px-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maiores. Illum impedit, odio dolorum sit numquam provident corporis, temporibus unde quod nisi, nemo fuga non. Laboriosam non mollitia quasi sed.</p>
        </div>
        <div className='flex p-10'>
        <div className='w-1/2 p-10'>
        <h3>Get to know me!</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sint, rerum veniam nesciunt deleniti voluptatibus ut minus fugit sapiente corrupti numquam, saepe sequi facere? Odio vitae vel vero est beatae?</p>
        <p className='h-20 w-64 bg-spacecadet hover:bg-indigo hover:cursor-pointer text-white rounded-xl mt-16 flex items-center justify-center'>CONTACT</p> 
        </div>
        <div className='w-1/2 p-10'>
        <h3>My Skills!</h3>
        <div className='grid grid-cols-5 auto-rows-auto gap-4'>
           <Skills name="HTML"/>
           <Skills name="JavaScript"/>
           <Skills name="CSS"/>
           <Skills name="Node JS"/>
           <Skills name="Express"/>
           <Skills name="PostgreSQL"/>
           <Skills name="MongoDB"/>
           <Skills name="React"/>
           <Skills name="Redux"/>
           <Skills name="Tailwind"/>
           <Skills name="Docker"/>
           
        </div>
        </div>
        </div>
    </div>
  )
}

export default aboutMe