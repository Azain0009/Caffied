import React from 'react'

const ReviewCard = ({review}) => {
  return (
    <div className='border border-gray bg-gray-100 rounded text-center'>
      
      <img className='aspect-square object-cover' src={review.image} />
      <div className='py-4'>
        <h3 className='text-2xl mb-2'>{review.name}</h3>
        <img src="./images/quotation.png" className='mx-2' alt="" />
        <p className='mb-2'>{review.testimonials}</p>
        <img src="./images/quotation.png" className='ml-auto mx-2 rotate-180' alt="" />
      </div>
    </div>
  )
}

export default ReviewCard