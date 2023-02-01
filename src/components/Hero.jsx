import React from 'react'
import Button from './Button'
import Shop from './Shop';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (

    <section className="sm:py-16 py-20 md:py-72 px-4 sm:px-6 lg:px-8 bg-cover bg-bottom sm:bg-left-top  md:aspect-auto h-screen"
    style={{backgroundImage:'url(./images/hero.jpg)'}}>

      <div className='max-w-6xl mx-auto space-y-6'>
        <h1 className=' text-5xl  sm:text-center md:text-left font-playfair italic'>Discover the rich bold flavour.</h1>
        <p className=' w-full md:w-6/12 text-l sm:text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet sint quos sapiente saepe maxime ratione blanditiis doloribus minima hic.</p>
        <Link to="/shop" className='inline-block p-2 px-8 border-solid border-2 rounded border-orange-900 hover:bg-orange-900 hover:text-white text-center '>
        View Items
        </Link>
      </div>
    </section>

  )
}


export default Hero