import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import macbookRickAndMorty from "../../assets/image/macbookRickAndMorty.jpg"

import JsIMG from "../../assets/image/js.png"
import HTMLIMG from "../../assets/image/html.png"
import CssIMG from "../../assets/image/css.png"
import ReactIMG from "../../assets/image/react.png"
import ReduxIMG from "../../assets/image/redux.png"
import NodeJsIMG from "../../assets/image/nodejs.png"
import ExpressIMG from "../../assets/image/express.png"
import PostgreSQLIMG from "../../assets/image/PostgreSQL.png"




const Project4 = () => {
  const name = "RICK AND MORTY APP"
  const shortDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint placeat, eligendi accusantium quo fugiat, cum molestias perferendis, vel voluptatem corrupti et voluptas doloribus nam voluptatum quas. Explicabo temporibus modi corrupti!"
  const projectOverview = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur consectetur quae cum quod culpa eveniet numquam similique! Omnis, enim expedita doloribus culpa rerum ab fuga quidem? Voluptatem, minus atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur consectetur quae cum quod culpa eveniet numquam similique! Omnis, enim expedita doloribus culpa rerum ab fuga quidem? Voluptatem, minus atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur consectetur quae cum quod culpa eveniet numquam similique! Omnis, enim expedita doloribus culpa rerum ab fuga quidem? Voluptatem, minus atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur consectetur quae cum quod culpa eveniet numquam similique! Omnis, enim expedita doloribus culpa rerum ab fuga quidem? Voluptatem, minus atque. '
  const tools = [{
    name: "HTML",
    img: HTMLIMG
  },{
    name: "JavaScript",
    img: JsIMG
  },{
    name: "Css",
    img: CssIMG
  },{
    name: "React",
    img: ReactIMG
  },{
    name: "Redux",
    img: ReduxIMG
  },{
    name: "NodeJS",
    img: NodeJsIMG
  },{
    name: "Express",
    img: ExpressIMG
  },{
    name: "PostgreSQL",
    img: PostgreSQLIMG
  }] 
  const links ={
    github: "",
    live: ""
  }
  return (
    <div>
    <IntroProjects name={name} description={shortDescription} links={links}/>
    <DetailProjects img={macbookRickAndMorty} projectOverview={projectOverview} tools={tools} links={links}/>
    </div>
  )
}

export default Project4