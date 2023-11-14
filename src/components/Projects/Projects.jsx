import React from 'react'

const Projects = () => {
  return (
    <div className='bg-white w-full h-auto flex flex-col justify-center items-center p-10'>
        <h2 className='p-10 text-4xl'>PROJECTS</h2>
        <p className=' text-xl px-24'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quibusdam cum accusamus beatae, assumenda hic aperiam unde deleniti excepturi quaerat consequatur, maxime amet dicta enim laudantium quidem quae ab. Esse.</p>
        <div className='grid grid-cols-1 gap-4 w-full p-10'>
        <div className='flex w-full h-96'>
            <div className='bg-indigo w-1/2 rounded-l-xl'>IMAGEN</div>
            <div className='bg-indigo w-1/2 rounded-r-xl text-white'>
                <h3>EJEMPLO PROYECTO</h3>
            </div>
        </div>
        <div className='flex w-full h-96'>
            <div className='bg-indigo w-1/2 rounded-l-xl'>IMAGEN</div>
            <div className='bg-indigo w-1/2 rounded-r-xl text-white'>
                <h3>EJEMPLO PROYECTO</h3>
            </div>
        </div>
        <div className='flex w-full h-96'>
            <div className='bg-indigo w-1/2 rounded-l-xl'>IMAGEN</div>
            <div className='bg-indigo w-1/2 rounded-r-xl text-white'>
                <h3>EJEMPLO PROYECTO</h3>
            </div>
        </div>
        <div className='flex w-full h-96'>
            <div className='bg-indigo w-1/2 rounded-l-xl'>IMAGEN</div>
            <div className='bg-indigo w-1/2 rounded-r-xl text-white'>
                <h3>EJEMPLO PROYECTO</h3>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects