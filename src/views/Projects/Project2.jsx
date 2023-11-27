import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import macbookKitchenCabinet from "../../assets/image/macbookKitchenCabinet.jpg"

import JsIMG from "../../assets/image/js.png"
import HTMLIMG from "../../assets/image/html.png"
import CssIMG from "../../assets/image/css.png"
import ReactIMG from "../../assets/image/react.png"
import ReduxIMG from "../../assets/image/redux.png"
import NodeJsIMG from "../../assets/image/nodejs.png"
import ExpressIMG from "../../assets/image/express.png"
import PostgreSQLIMG from "../../assets/image/PostgreSQL.png"



const Project2 = () => {
  const name = "KITCHEN CABINET"
  const shortDescription = " Welcome to KITCHEN CABINET, where culinary creativity meets cutting-edge technology, providing you with a complete experience to discover, experiment, and enjoy high-quality recipes in the comfort of your home."
  const shortDescriptionSpanish = `
  Bienvenido a KITCHEN CABINET, donde la creatividad culinaria se encuentra con la tecnología de vanguardia, ofreciéndote una experiencia completa para descubrir, experimentar y disfrutar de recetas de alta calidad en la comodidad de tu hogar.`
  const projectOverview = `Welcome to KITCHEN CABINET!

  Explore the delicious world of cooking with our application, KITCHEN CABINET, where culinary creativity meets cutting-edge technology. We've curated a wide variety of high-quality recipes from a specialized API, allowing you to discover, experiment, and enjoy in the comfort of your home.
  
  With KITCHEN CABINET, finding the perfect recipe is easy and customizable. Filter recipes by name, diet type, or whether they were created by you or other users. Want to sort them alphabetically and by health score simultaneously? You can do it! We take pride in offering a flexible and comprehensive user experience.
  
  Each recipe comes with essential details such as health score, recommended diets, and detailed preparation instructions. Additionally, you have the ability to contribute to our culinary community by creating and sharing your own recipes!
  
  In the backend, we've employed Node.js, Express, and PostgreSQL to ensure robust performance and efficient data management. On the frontend, we've chosen React, Redux, and styled-components to create an attractive and user-friendly interface that enhances your search and contribution experience.
  
  Join KITCHEN CABINET and discover the joy of cooking with our verified recipes and the exciting possibility of creating and sharing your own culinary masterpieces. Cooking has never been as thrilling and accessible as it is with KITCHEN CABINET! Bon appétit.`

  const projectOverviewSpanish = `¡Bienvenido a KITCHEN CABINET!

  Explora el delicioso mundo de la cocina con nuestra aplicación KITCHEN CABINET, donde la creatividad culinaria se encuentra con la tecnología de punta. Hemos recopilado una amplia variedad de recetas de alta calidad de una API especializada para que puedas descubrir, experimentar y disfrutar en la comodidad de tu hogar.
  
  Con KITCHEN CABINET, la búsqueda de la receta perfecta es fácil y personalizable. Filtra las recetas por nombre, tipo de dieta, o si fueron creadas por ti o por otros usuarios. ¿Quieres ordenarlas alfabéticamente y por salud (healthScore) al mismo tiempo? ¡Puedes hacerlo! Nos enorgullece ofrecer una experiencia de usuario flexible y completa.
  
  Cada receta viene acompañada de detalles esenciales como el healthScore, las dietas recomendadas y detalladas instrucciones de preparación. Además, ¡tienes la capacidad de contribuir a nuestra comunidad culinaria creando y compartiendo tus propias recetas!
  
  En el backend, hemos utilizado Node.js, Express y PostgreSQL para garantizar un rendimiento robusto y una gestión eficiente de datos. En el frontend, hemos optado por React, Redux y styled-components para crear una interfaz atractiva y fácil de usar que mejora tu experiencia de búsqueda y contribución.
  
  Únete a KITCHEN CABINET y descubre el placer de cocinar con nuestras recetas verificadas y la emocionante posibilidad de crear y compartir tus propias obras maestras culinarias. ¡La cocina nunca ha sido tan emocionante y accesible como lo es con KITCHEN CABINET! Bon appétit.`
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
    github: "https://github.com/rodrigoVilla11/PI-Food-RodrigoVilla",
    live: "https://pi-food-rodrigo-villa.vercel.app/"
  }
  return (
    <div>
    <IntroProjects name={name} description={shortDescription} links={links}/>
    <DetailProjects img={macbookKitchenCabinet} projectOverview={projectOverview} tools={tools} links={links}/>
    </div>
  )
}

export default Project2