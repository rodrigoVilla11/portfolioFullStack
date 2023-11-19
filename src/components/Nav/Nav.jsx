import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className='w-full bg-spacecadet p-4 flex justify-between fixed text-white'>
        <div className='flex space-x-6 items-center'>
            <p className="bg-blue-500 text-white rounded-full w-12 h-12 "></p>
            <p>RODRIGO NICOLAS VILLARREAL</p>
        </div>
        <div className='flex space-x-6 items-center'>
        <Link to="intro" smooth={true} duration={500}><p className='hover:cursor-pointer'>HOME</p></Link>
        <Link to="about" smooth={true} duration={500}><p className='hover:cursor-pointer'>ABOUT</p></Link>
        <Link to="projects" smooth={true} duration={500}><p className='hover:cursor-pointer'>PROJECTS</p></Link>
        <Link to="contact" smooth={true} duration={500}> <p className='hover:cursor-pointer'>CONTACT</p></Link>
        </div>
    </div>
  )
}

export default Nav