import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import macbookStarWars from "../../assets/image/macbookStarWars.jpg"

import JsIMG from "../../assets/image/js.png"
import HTMLIMG from "../../assets/image/html.png"
import CssIMG from "../../assets/image/css.png"
import ReactIMG from "../../assets/image/react.png"
import ReduxIMG from "../../assets/image/redux.png"
import NodeJsIMG from "../../assets/image/nodejs.png"
import ExpressIMG from "../../assets/image/express.png"
import MongoIMG from "../../assets/image/mongodb.png"
import DockerIMG from "../../assets/image/docker.png"
import TailwindIMG from "../../assets/image/tailwind.png"



const Project3 = () => {
  const name = "STAR WARS APP"
  const shortDescription = "Welcome to STAR WARS APP! Immerse yourself in the iconic Star Wars universe with cutting-edge microservices. Explore, create, and edit characters, connecting them to planets and movies, all with a dynamic interface powered by React. May the Force be with you on this exciting journey!"
  const shortDescriptionSpanish =`¡Bienvenido a STAR WARS APP! Sumérgete en el icónico universo de Star Wars con microservicios de vanguardia. Explora, crea y edita personajes, conectándolos con planetas y películas, todo con una interfaz dinámica impulsada por React. ¡Que la Fuerza te acompañe en este emocionante viaje!`
  const projectOverview = `Welcome to STAR WARS APP. Immerse yourself in the captivating universe of Star Wars with our application designed using the latest technologies in microservices architecture. Developed using Docker for easy implementation and scalability, along with NodeJS and Express for the backend, and MongoDB as the database, STAR WARS APP offers a complete experience to explore, create, and edit iconic Star Wars characters.

  At the core of our application lies the ability to visualize and manage characters, connecting them to the planets of their origin and the movies in which they participate. Each character has a unique link to their birthplace and their involvement in the galaxy, providing you with a comprehensive view of the Star Wars story.
  
  On the frontend, we've utilized React for a dynamic and intuitive user interface, supported by Redux Toolkit for efficient state management. Additionally, we've incorporated Tailwind CSS for an elegant and adaptable design, delivering an attractive and user-friendly experience.
  
  Discover all the details about the planets and movies that make up the Star Wars universe. Explore, learn, and immerse yourself in the rich narrative of this distant galaxy. STAR WARS APP invites you to be the architect of your own experience, allowing you to interact and contribute to the database as you dive into the fascinating world of Star Wars. May the Force be with you on this exciting adventure.`
  const projectOverviewSpanish = `
  Bienvenido a STAR WARS APP. Sumérgete en el fascinante universo de Star Wars con nuestra aplicación diseñada con las últimas tecnologías en arquitectura de microservicios. Desarrollada mediante Docker para una fácil implementación y escalabilidad, junto con NodeJS y Express para el backend, y MongoDB como base de datos, STAR WARS APP ofrece una experiencia completa para explorar, crear y editar personajes icónicos de Star Wars.

  En el corazón de nuestra aplicación se encuentra la capacidad de visualizar y gestionar personajes, conectándolos con los planetas de su origen y las películas en las que participan. Cada personaje tiene un lazo único con su lugar de nacimiento y su participación en la galaxia, brindándote una visión integral de la historia de Star Wars.

  En el frontend, hemos utilizado React para una interfaz de usuario dinámica e intuitiva, respaldada por Redux Toolkit para un manejo eficiente del estado de la aplicación. Además, hemos incorporado Tailwind CSS para un diseño elegante y adaptable, proporcionando una experiencia de usuario atractiva y fácil de usar.

  Descubre todos los detalles sobre los planetas y películas que conforman el universo Star Wars. Explora, aprende y sumérgete en la rica narrativa de esta galaxia lejana. STAR WARS APP te invita a ser el arquitecto de tu propia experiencia, permitiéndote interactuar y contribuir a la base de datos mientras te sumerges en el fascinante mundo de Star Wars. Que la Fuerza te acompañe en esta emocionante aventura.
`;
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
    name: "MongoDB",
    img: MongoIMG
  },{
    name: "Tailwind",
    img: TailwindIMG
  },{
    name: "Docker",
    img: DockerIMG
  }] 
  const links ={
    github: "https://github.com/rodrigoVilla11/star_wars_api_microservices",
    live: "https://star-wars-front-theta.vercel.app/"
  }
  return (
    <div>
    <IntroProjects name={name} description={shortDescription} links={links}/>
    <DetailProjects img={macbookStarWars} projectOverview={projectOverview} tools={tools} links={links}/>
    </div>
  )
}

export default Project3