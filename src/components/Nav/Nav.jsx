import React from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const handleClick = (e) =>{
    e.preventDefault()
    navigate("/")
  }
  return (
    <div className='w-full bg-spacecadet p-4 flex justify-between fixed text-white z-50'>
        <div className='flex space-x-6 items-center'>
            <p className="bg-blue-500 text-white rounded-full w-12 h-12 "></p>
            <button onClick={handleClick}>RODRIGO NICOLAS VILLARREAL</button>
        </div>
        <div className='flex space-x-6 items-center'>
       <Link to="intro" smooth={true} duration={500}><button onClick={handleClick}className='hover:cursor-pointer'>HOME</button></Link>
        <Link to="about" smooth={true} duration={500}><p className='hover:cursor-pointer'>ABOUT</p></Link>
        <Link to="projects" smooth={true} duration={500}><p className='hover:cursor-pointer'>PROJECTS</p></Link>
        <Link to="contact" smooth={true} duration={500}> <p className='hover:cursor-pointer'>CONTACT</p></Link>
       </div>
    </div>
  )
}

export default Nav