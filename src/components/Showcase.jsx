import React from 'react'
import Card from './Card'
import products from './data'



const Showcase = () => {
  return (
    <div className='sm:text-left md:text-center px-4 py-12 max-w-6xl mx-auto'>
      <p className=" text-orange-900 mb-4 ">BEST SELLERS</p>
      <h2 className='text-3xl font-medium font-playfair mb-4'>Now On Sale!</h2>
      <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>


      <div className=" mx-auto flex flex-col gap-6 md:flex-row ">
      {
        products.filter((product)=>(product.isOnSale === true))
        .map((product) => (
            <Card key={product.id} product={product}/>
          )
        )
      }
      </div>
      
      

    </div>
  )
}

export default Showcase