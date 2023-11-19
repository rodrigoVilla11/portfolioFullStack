import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='bg-spacecadet text-white w-full h-80 flex flex-col items-center justify-center p-10'>
        <div className='flex items-center '>
        <div className='w-1/2'>
            <h3>RODRIGO NICOLAS VILLARREAL</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam incidunt, dicta magni laudantium veritatis quas voluptatibus exercitationem recusandae consequuntur? Quisquam rem, cum earum iure quos repellat natus quasi molestias?</p>
        </div>
        <div className='w-1/2 flex flex-col '>
                <h3 className='self-end p-2'>SOCIAL</h3>
            <div className='flex self-end'>
                <p className='p-2'>Instagram</p>
                <p className='p-2'>Linkedin</p>
                <p className='p-2'>GitHub</p>
            </div>
        </div>
    </div>
    <div className=''>
        <p>Copyright | Made by <Link to="intro" smooth={true} duration={500}><span className='hover:cursor-pointer'>Rodrigo Nicolas Villarreal</span></Link></p>
    </div>
    </div>
  )
}

export default Footer