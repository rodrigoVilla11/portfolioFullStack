import React from 'react'
import IntroProjects from '../../components/Projects/IntroProjects'
import DetailProjects from '../../components/Projects/DetailProjects'
import maxbookSixCircles from "../../assets/image/macbookSixCircles.jpg"

import JsIMG from "../../assets/image/js.png"
import TsIMG from "../../assets/image/ts.png"
import HTMLIMG from "../../assets/image/html.png"
import CssIMG from "../../assets/image/css.png"
import ReactIMG from "../../assets/image/react.png"
import ReduxIMG from "../../assets/image/redux.png"
import NodeJsIMG from "../../assets/image/nodejs.png"
import ExpressIMG from "../../assets/image/express.png"
import MongoIMG from "../../assets/image/mongodb.png"

const Project1 = () => {
  const name = "SIX CIRCLES"
  const shortDescription = "Welcome to Six-Circles, your e-commerce connection hub! Crafted to unite buyers and sellers, our platform offers a seamless experience for selling or discovering the best deals. Connect easily, showcase products, explore with ratings and reviews, and build trust in the innovative Six Circles community."
  const shortDescriptionSpanish = '¡Bienvenido a Six-Circles, tu centro de conexión para el comercio electrónico! Diseñada para unir compradores y vendedores, nuestra plataforma ofrece una experiencia fluida para vender o descubrir las mejores ofertas. Conéctate fácilmente, muestra productos, explora con calificaciones y reseñas, y construye confianza en la innovadora comunidad de Six Circles.'
  const projectOverview =`
  Welcome to Six-Circles, your connection platform for buyers and sellers!

At Six-Circles, we've crafted a unique e-commerce experience from the ground up, designed to bring buyers and sellers together in an innovative and reliable environment. Looking to sell your products or find the best deals? You're in the right place!

With Six-Circles, the key is connection. Whether creating an account manually or conveniently through Google, you enter a world where sellers and buyers are just a few clicks away. If you're a seller, showcase detailed specifications of your products and reach an audience eager for quality goods. Are you a buyer? Explore a variety of products from sellers with ratings and reviews, providing a safe and transparent shopping experience.

The rating and review functionality activates only after a purchase, ensuring authentic and helpful opinions for the community. Each purchase becomes an opportunity to build trust between buyers and sellers in the Six Circles of our platform.

In the backend, we've implemented cutting-edge technologies with Node.js, Express, and MongoDB to ensure a robust performance and efficient data management. On the frontend, we've chosen a powerful combination of React, TypeScript, Redux, and SAS to provide an attractive interface and a smooth user experience.

Six-Circles is more than an e-commerce platform; it's a community that intelligently and effectively connects buyers and sellers. Join us and discover how the connection in Six Circles can transform your online buying and selling experience. Start exploring today!
  `
  const projectOverviewSpanish = `
  ¡Bienvenido a Six-Circles, tu plataforma de conexión para compradores y vendedores!
  
  En Six-Circles, hemos creado una experiencia única de e-commerce desde cero, diseñada para acercar a compradores y vendedores en un entorno innovador y confiable. ¿Buscas vender tus productos o encontrar las mejores ofertas? ¡Estás en el lugar adecuado!
  
  Con Six-Circles, la clave está en la conexión. Al crear una cuenta, ya sea de forma manual o mediante la conveniencia de Google, te adentras en un mundo donde tanto vendedores como compradores se encuentran a solo unos clics de distancia. Si eres un vendedor, puedes mostrar las especificaciones detalladas de tus productos y alcanzar a una audiencia ávida de productos de calidad. ¿Eres un comprador? Explora una variedad de productos de vendedores con puntuaciones y comentarios, proporcionando una experiencia de compra segura y transparente.
  
  La funcionalidad de puntuación y comentarios solo se activa después de realizar una compra, asegurando opiniones auténticas y útiles para la comunidad. Así, cada compra se convierte en una oportunidad de construir la confianza entre compradores y vendedores en los Seis Círculos de nuestra plataforma.
  
  En el backend, hemos implementado tecnologías de vanguardia con Node.js, Express y MongoDB para garantizar un rendimiento sólido y una gestión eficiente de datos. En el frontend, hemos optado por una combinación potente de React, TypeScript, Redux y SAS para brindarte una interfaz atractiva y una experiencia de usuario fluida.
  
  Six-Circles es más que una plataforma de e-commerce; es una comunidad que une a compradores y vendedores de manera inteligente y efectiva. Únete a nosotros y descubre cómo la conexión en Seis Círculos puede transformar tu experiencia de compra y venta en línea. ¡Empieza a explorar hoy!`
  const tools = [{
    name: "HTML",
    img: HTMLIMG
  },{
    name: "JavaScript",
    img: JsIMG
  },{
    name: "TypeScript",
    img: TsIMG
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
  }] 
  const links ={
    github: "https://github.com/six-circles",
    live: "https://pf-sixcircles-front.vercel.app/"
  }
  return (
    <div>
    <IntroProjects name={name} description={shortDescription} links={links}/>
    <DetailProjects img={maxbookSixCircles} projectOverview={projectOverview} tools={tools} links={links}/>
    </div>
  )
}

export default Project1