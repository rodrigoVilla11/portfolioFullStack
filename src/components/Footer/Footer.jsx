import React from 'react'

const Footer = () => {
  return (
    <div className='bg-spacecadet text-white w-full h-80 flex flex-col items-center justify-center p-10'>
        <div className='flex items-center'>
        <div className='w-1/2'>
            <h3>RODRIGO NICOLAS VILLARREAL</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam incidunt, dicta magni laudantium veritatis quas voluptatibus exercitationem recusandae consequuntur? Quisquam rem, cum earum iure quos repellat natus quasi molestias?</p>
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center'>
                <h3>SOCIAL</h3>
            <div>
                <p>imagenes</p>
            </div>
        </div>
    </div>
    <div className='mt-20'>
        <p>Copyright | Made by Rodrigo Nicolas Villarreal</p>
    </div>
    </div>
  )
}

export default Footer