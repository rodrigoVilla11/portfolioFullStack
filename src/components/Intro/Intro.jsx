import React from 'react'
import { Link } from 'react-scroll'


const Intro = () => {
  return (
    <div className=' bg-eggshell w-full h-screen flex flex-col justify-center items-center p-10'>
     <h1 className='text-4xl p-10'>HEY, I'M RODRIGO NICOLAS VILLARREAL</h1>
     <p className='text-xl px-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa nam ex velit eius, illum quidem quibusdam tempora voluptate nobis numquam ipsum odit rem provident est voluptas ducimus. Rem, voluptatem?</p>
     <Link to="projects" smooth={true} duration={500}>
    <p className='h-20 w-64 bg-spacecadet rounded-xl mt-16 flex items-center justify-center text-white hover:bg-indigo hover:cursor-pointe'>PROJECTS</p></Link>
    </div>
  )
}

export default Intro