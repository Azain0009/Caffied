import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <section className=' sm:text-left md:text-center  p-4 max-w-6xl mx-auto pt-12'>
            
            <div className="md:grid md:grid-cols-2 gap-7">
                <img className="rounded object-cover mx-auto" src="./images/nothing.png" alt="" />
                <div className=" text-left mb-4 ">
                    <h2 className='mb-8 text-4xl font-light'>Your Shopping List  Is Empty</h2>
                    <Link to='/shop'><h3 className='p-2 px-6 border-solid border-2 rounded border-gray-700 bg-gray-900 text-white text-center cursor-pointer '>Go back to shopping</h3></Link>
                </div>
            </div>
        </section>
  )
}

export default EmptyCart