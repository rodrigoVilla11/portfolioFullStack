import React from 'react'
import macbookSixCircles from "../../assets/image/macbookSixCircles.jpg"
import macbookKitchenCabinet from "../../assets/image/macbookKitchenCabinet.jpg"
import macbookRickAndMorty from "../../assets/image/macbookRickAndMorty.jpg"
import macbookStarWars from "../../assets/image/macbookStarWars.jpg"

import Project from './Project'

const Projects = (props) => {
  return (
    <div className='bg-white w-full h-auto flex flex-col justify-center items-center p-10'>
        <h2 className='p-10 text-4xl  pt-20'>PROJECTS</h2>
        <p className=' text-xl px-24'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quibusdam cum accusamus beatae, assumenda hic aperiam unde deleniti excepturi quaerat consequatur, maxime amet dicta enim laudantium quidem quae ab. Esse.</p>
        <div className='grid grid-cols-1 gap-4 w-full p-10'>
        <Project name="SIX CIRCLES" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi, iusto enim illo odio maxime alias soluta voluptatem nostrum quisquam pariatur, voluptatum quos exercitationem nulla! Ullam excepturi commodi fugiat pariatur?" img={macbookSixCircles} linkTo="/project1"/>
        <Project name="KITCHEN CABINET" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi, iusto enim illo odio maxime alias soluta voluptatem nostrum quisquam pariatur, voluptatum quos exercitationem nulla! Ullam excepturi commodi fugiat pariatur?" img={macbookKitchenCabinet} linkTo="/project2"/>
        <Project name="STAR WARS APP" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi, iusto enim illo odio maxime alias soluta voluptatem nostrum quisquam pariatur, voluptatum quos exercitationem nulla! Ullam excepturi commodi fugiat pariatur?" img={macbookStarWars} linkTo="/project3"/>
        <Project name="RICK AND MORTY APP" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi, iusto enim illo odio maxime alias soluta voluptatem nostrum quisquam pariatur, voluptatum quos exercitationem nulla! Ullam excepturi commodi fugiat pariatur?" img={macbookRickAndMorty} linkTo="/project4"/>
    </div>
    </div>
  )
}

export default Projects