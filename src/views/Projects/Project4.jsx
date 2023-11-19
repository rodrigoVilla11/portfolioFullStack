import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import maxbookSixCircles from "../../assets/image/macbookSixCircles.jpg"
import ReactIMG from "../../assets/image/react.png"

const Project4 = () => {
  const name = "STAR WARS APP"
  const shortDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint placeat, eligendi accusantium quo fugiat, cum molestias perferendis, vel voluptatem corrupti et voluptas doloribus nam voluptatum quas. Explicabo temporibus modi corrupti!"
  const projectOverview = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur consectetur quae cum quod culpa eveniet numquam similique! Omnis, enim expedita doloribus culpa rerum ab fuga quidem? Voluptatem, minus atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur consectetur quae cum quod culpa eveniet numquam similique! Omnis, enim expedita doloribus culpa rerum ab fuga quidem? Voluptatem, minus atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur consectetur quae cum quod culpa eveniet numquam similique! Omnis, enim expedita doloribus culpa rerum ab fuga quidem? Voluptatem, minus atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur consectetur quae cum quod culpa eveniet numquam similique! Omnis, enim expedita doloribus culpa rerum ab fuga quidem? Voluptatem, minus atque. '
  const tools = [{
    name: "React",
    img: ReactIMG
  },{
    name: "React",
    img: ReactIMG
  },{
    name: "React",
    img: ReactIMG
  },{
    name: "React",
    img: ReactIMG
  },{
    name: "React",
    img: ReactIMG
  },{
    name: "React",
    img: ReactIMG
  },{
    name: "React",
    img: ReactIMG
  },{
    name: "React",
    img: ReactIMG
  },] 
  const links ={
    github: "",
    live: ""
  }
  return (
    <div>
    <IntroProjects name={name} description={shortDescription} links={links}/>
    <DetailProjects img={maxbookSixCircles} projectOverview={projectOverview} tools={tools} links={links}/>
    </div>
  )
}

export default Project4