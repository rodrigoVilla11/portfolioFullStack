import React from 'react'
import macbookSixCircles from "../../assets/image/macbookSixCircles.jpg"
import Project from './Project'

const Projects = (props) => {
  return (
    <div className='bg-white w-full h-auto flex flex-col justify-center items-center p-10'>
        <h2 className='p-10 text-4xl'>PROJECTS</h2>
        <p className=' text-xl px-24'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quibusdam cum accusamus beatae, assumenda hic aperiam unde deleniti excepturi quaerat consequatur, maxime amet dicta enim laudantium quidem quae ab. Esse.</p>
        <div className='grid grid-cols-1 gap-4 w-full p-10'>
        <Project name="Six Circles" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi, iusto enim illo odio maxime alias soluta voluptatem nostrum quisquam pariatur, voluptatum quos exercitationem nulla! Ullam excepturi commodi fugiat pariatur?" img={macbookSixCircles}/>
        <Project name="Kitchen Cabinet" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi, iusto enim illo odio maxime alias soluta voluptatem nostrum quisquam pariatur, voluptatum quos exercitationem nulla! Ullam excepturi commodi fugiat pariatur?"/>
    </div>
    </div>
  )
}

export default Projects