import React from 'react'
import About from '../About'
import Hero from '../Hero'
import Newsletter from '../Newsletter'
import Showcase from '../Showcase'
import Testimonials from '../Testimonials'

const Homepage = () => {
  return (
    <div>
        <Hero />
        <Showcase />
        <Testimonials />
        <About />
        <Newsletter />
    </div>
  )
}

export default Homepage