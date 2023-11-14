import React from 'react'

const Skills = (props) => {
  return (
    <div className='h-36 w-24 bg-spacecadet hover:bg-indigo text-white rounded-xl flex flex-col justify-center items-center'>
        <p>{props.name}</p>
        <div className='border border-white w-full h-5/6'><img src={props.image} alt={props.name} /> </div>
    </div>
  )
}

export default Skills