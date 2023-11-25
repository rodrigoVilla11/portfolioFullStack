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
  const shortDescription = "Welcome to RickAndMortyApp! Immerse yourself in the diverse characters of Rick and Morty. With cutting-edge technologies, our app offers a personalized experience—register, log in, and explore the unmistakable universe of Rick and Morty."
  const shortDescriptionSpanish = `¡Bienvenido a RickAndMortyApp! Sumérgete en los variados personajes de Rick and Morty. Con tecnologías de vanguardia, nuestra aplicación ofrece una experiencia personalizada: regístrate, inicia sesión y explora el inconfundible universo de Rick and Morty.`
  const projectOverview = `Welcome to RickAndMortyApp!

  Explore the vibrant universe of Rick and Morty with our application that allows you to immerse yourself in the diversity of characters from the series. Developed with cutting-edge technologies, our backend utilizes Node.js, Express, and PostgreSQL to provide you with a robust and reliable experience.
  
  In RickAndMortyApp, you won't just be able to visualize all the characters from the series, but you'll also have the ability to personalize your experience. Find a character you love? Add it to your favorites! To unlock this functionality and take your experience to the next level, simply register and log in with your account.
  
  On the frontend, we've used React for a dynamic and intuitive user interface, supported by Redux Toolkit for efficient state management. Additionally, we've implemented CSS Modules for a modular and easy-to-maintain style, ensuring a visually appealing experience.
  
  Immerse yourself in the stories and peculiarities of each character. With RickAndMortyApp, you not only explore but also customize your own collection of favorite characters. Register, log in, and start your journey in the unmistakable universe of Rick and Morty.`
  const projectOverviewSpanish = `¡Bienvenido a RickAndMortyApp!

  Explora el vibrante universo de Rick and Morty con nuestra aplicación que te permite sumergirte en la diversidad de personajes de la serie. Desarrollada con tecnologías de vanguardia, nuestro backend utiliza Node.js, Express y PostgreSQL para brindarte una experiencia robusta y confiable.
  
  En RickAndMortyApp, no solo podrás visualizar todos los personajes de la serie, sino que también tendrás la capacidad de personalizar tu experiencia. ¿Encuentras un personaje que te encanta? ¡Agrégalo a tus favoritos! Para desbloquear esta funcionalidad y llevar tu experiencia al siguiente nivel, simplemente regístrate y accede con tu cuenta.
  
  En el frontend, hemos utilizado React para una interfaz de usuario dinámica e intuitiva, respaldada por Redux Toolkit para una gestión eficiente del estado de la aplicación. Además, hemos implementado CSS Modules para un estilo modular y fácil de mantener, asegurando una experiencia visualmente atractiva.
  
  Sumérgete en las historias y peculiaridades de cada personaje. Con RickAndMortyApp, no solo exploras, sino que también personalizas tu propia colección de personajes favoritos. ¡Regístrate, inicia sesión y comienza tu viaje en el universo inimitable de Rick and Morty`
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
    github: "https://github.com/rodrigoVilla11/rickAndMortyProject",
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