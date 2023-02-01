import reviews from './reviews'
import ReviewCard from './ReviewCard'
const Testimonials = () => {
  return (
    <section className='sm:text-left md:text-center p-4 max-w-6xl mx-auto'>
    <p className=" text-orange-900 mb-4 ">Reviews</p>
    <h2 className='text-3xl font-medium font-playfair mb-4'>What they say about us!</h2>
    <p className='mb-4'>Dont't take our word for it. Trust our regular customers</p>
    
    
<div className=" mx-auto max-w-6xl p-3 flex flex-col gap-6 md:flex-row">
{
        reviews.map((review) => (
            <ReviewCard key={review.id} review={review}/>
          )
        )
      }
</div>

    </section>
  )
}

export default Testimonials