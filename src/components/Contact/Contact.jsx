import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-eggshell w-full h-screen flex flex-col justify-center items-center'>
        <h2 className='p-10 text-4xl'>CONTACT</h2>
        <p className=' text-xl px-24'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quibusdam cum accusamus beatae, assumenda hic aperiam unde deleniti excepturi quaerat consequatur, maxime amet dicta enim laudantium quidem quae ab. Esse.</p>
        <form className='bg-blue-500 w-2/3 h-1/2 flex flex-col justify-center items-center mt-10 rounded-xl'>
            <div><label htmlFor="name">Name:</label></div>
            <div className='w-full h-12 flex justify-center rounded-xl'><input  className='w-1/2 h-full text-2xl rounded-xl' type="text" name="name" /></div>

            <div><label htmlFor="email">Email: </label></div>
            <div  className='w-full h-12 flex justify-center rounded-xl'><input className='w-1/2 h-full text-2xl rounded-xl' type="text" name="email" /></div>

            <div><label htmlFor="message">Message: </label></div>
            <div  className='w-full h-28 flex justify-center rounded-xl'><textarea className='w-1/2 h-full text-2xl rounded-xl' type="text" name="message" /></div>
        </form>
    </div>
  )
}

export default Contact