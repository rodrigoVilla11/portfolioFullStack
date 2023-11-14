import React from 'react'

const Nav = () => {
  return (
    <div className='w-full bg-spacecadet p-4 flex justify-between fixed text-white'>
        <div className='flex space-x-6 items-center'>
            <p className="bg-blue-500 text-white rounded-full w-12 h-12 "></p>
            <p>RODRIGO NICOLAS VILLARREAL</p>
        </div>
        <div className='flex space-x-6 items-center'>
            <p className='hover:cursor-pointer'>HOME</p>
            <p className='hover:cursor-pointer'>ABOUT</p>
            <p className='hover:cursor-pointer'>PROJECTS</p>
            <p className='hover:cursor-pointer'>CONTACT</p>
        </div>
    </div>
  )
}

export default Nav