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
        <p className=' text-xl px-24'>Here you will find some of the personal projects that I created with each project containing its own case study</p>
        <div className='grid grid-cols-1 gap-4 w-full p-10'>
        <Project name="SIX CIRCLES" description="Welcome to Six-Circles, your e-commerce connection hub! Crafted to unite buyers and sellers, our platform offers a seamless experience for selling or discovering the best deals. Connect easily, showcase products, explore with ratings and reviews, and build trust in the innovative Six Circles community." descriptionSpanish="¡Bienvenido a Six-Circles, tu centro de conexión para el comercio electrónico! Diseñada para unir compradores y vendedores, nuestra plataforma ofrece una experiencia fluida para vender o descubrir las mejores ofertas. Conéctate fácilmente, muestra productos, explora con calificaciones y reseñas, y construye confianza en la innovadora comunidad de Six Circles." img={macbookSixCircles} linkTo="/project1"/>
        <Project name="KITCHEN CABINET" description="Welcome to KITCHEN CABINET, where culinary creativity meets cutting-edge technology, providing you with a complete experience to discover, experiment, and enjoy high-quality recipes in the comfort of your home." descriptionSpanish=" Bienvenido a KITCHEN CABINET, donde la creatividad culinaria se encuentra con la tecnología de vanguardia, ofreciéndote una experiencia completa para descubrir, experimentar y disfrutar de recetas de alta calidad en la comodidad de tu hogar." img={macbookKitchenCabinet} linkTo="/project2"/>
        <Project name="STAR WARS APP" description="Welcome to STAR WARS APP! Immerse yourself in the iconic Star Wars universe with cutting-edge microservices. Explore, create, and edit characters, connecting them to planets and movies, all with a dynamic interface powered by React. May the Force be with you on this exciting journey!" descriptionSpanish="¡Bienvenido a STAR WARS APP! Sumérgete en el icónico universo de Star Wars con microservicios de vanguardia. Explora, crea y edita personajes, conectándolos con planetas y películas, todo con una interfaz dinámica impulsada por React. ¡Que la Fuerza te acompañe en este emocionante viaje!" img={macbookStarWars} linkTo="/project3"/>
        <Project name="RICK AND MORTY APP" description="Welcome to RickAndMortyApp! Immerse yourself in the diverse characters of Rick and Morty. With cutting-edge technologies, our app offers a personalized experience—register, log in, and explore the unmistakable universe of Rick and Morty." descriptionSpanish="¡Bienvenido a RickAndMortyApp! Sumérgete en los variados personajes de Rick and Morty. Con tecnologías de vanguardia, nuestra aplicación ofrece una experiencia personalizada: regístrate, inicia sesión y explora el inconfundible universo de Rick and Morty." img={macbookRickAndMorty} linkTo="/project4"/>
    </div>
    </div>
  )
}

export default Projects