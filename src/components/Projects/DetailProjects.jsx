import React from 'react'
import Skills from '../AboutMe/Skills'
import react from "../../assets/image/react.png"

const DetailProjects = (props) => {
    console.log(props.tools)
  return (
    <div className='w-full h-auto flex flex-col items-center'>
        <div className='w-4/5'>
            <img src={props.img} alt={props.name}/>
        </div>
        <div className='w-4/5'>
            <h2 className='text-2xl p-10'>Project Overview</h2>
            <p className='text-xl px-24'>{props.projectOverview}</p>
        </div>
        <div className='w-4/5'>
            <h2 className='text-2xl p-10'>Tools Used</h2>
            <div className='px-24 grid grid-cols-5 auto-rows-auto gap-4'>
            {props.tools&&props.tools.map((tool)=>{
                return <Skills name={tool.name} image={tool.img}/>
            })}
            </div>
        </div>
        <div className='w-4/5'>
        <h2 className='text-2xl p-10'>Links</h2>
        <div className='flex'>
        <a href={props.links.github}>
        <p className='h-20 w-64 bg-spacecadet rounded-xl  flex items-center justify-center text-white hover:bg-indigo hover:cursor-pointer mx-24 mb-10'>REPO</p>
        </a>
        <a href={props.links.live}>
        <p className='h-20 w-64 bg-spacecadet rounded-xl  flex items-center justify-center text-white hover:bg-indigo hover:cursor-pointer mb-10'>See Live</p>   
        </a></div>
        </div>
    </div>
  )
}

export default DetailProjects