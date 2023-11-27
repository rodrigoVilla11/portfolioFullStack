import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
  const [isButtonVisible, setButtonVisible] = useState(false)
  
  return (
    <div>  <div className='flex w-full h-96 relative'>
    <div onMouseEnter={() => setButtonVisible(true)} 
        onMouseLeave={() => setButtonVisible(false)} className='bg-indigo w-1/2 rounded-l-xl hover:cursor-pointer flex justify-center items-center realtive z-10'>
        <img className={`h-full z-0 ${isButtonVisible ? 'blur-sm' : ''}`}  src={props.img} alt={props.name} />
        {isButtonVisible && (
          <div className='absolute z-20'>
            <a href={props.linkLive}>
              <p className='m-10 h-20 w-64 bg-spacecadet hover:shadow-2xl hover:bg-dogwoodrose hover:cursor-pointer text-white rounded-xl flex items-center justify-center'>
                LIVE
              </p>
            </a>
          </div>
        )}
        </div>
    <div className='bg-indigo w-1/2 rounded-r-xl text-white flex flex-col'>
        <h3 className='text-3xl p-10'>{props.name}</h3>
        <p className='text-l px-10'>{props.description}</p>
        <Link to={props.linkTo}>
        <p className='m-10 h-20 w-64 hover:shadow-2xl bg-spacecadet hover:bg-dogwoodrose hover:cursor-pointer text-white rounded-xl flex items-center justify-center'>CASE STUDY</p></Link>
    </div>
</div></div>
  )
}

export default Project

