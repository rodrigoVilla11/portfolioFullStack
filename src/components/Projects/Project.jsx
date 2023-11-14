import React from 'react'

const Project = (props) => {
  return (
    <div>  <div className='flex w-full h-96'>
    <div className='bg-indigo w-1/2 rounded-l-xl hover:blur-sm hover:cursor-pointer'>
        <img className='h-full' src={props.img} alt={props.name}/>
        </div>
    <div className='bg-indigo w-1/2 rounded-r-xl text-white flex flex-col'>
        <h3 className='text-3xl p-10'>{props.name}</h3>
        <p className='text-l px-10'>{props.description}</p>
        <p className='m-10 h-20 w-64 bg-spacecadet hover:bg-dogwoodrose hover:cursor-pointer text-white rounded-xl flex items-center justify-center'>CASE STUDY</p>
    </div>
</div></div>
  )
}

export default Project