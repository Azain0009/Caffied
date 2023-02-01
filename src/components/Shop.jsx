import products from './data'
import Card from './Card'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Shop = () => {
  return (
    <>
          <div className="bg-gray-900 pb-12 mb-4"></div>
    <div className='container mx-auto p-4'>
            <Link  to="/" ><ArrowBackIosNewIcon/></Link>
            </div>
    <section className='sm:text-left md:text-center p-4 max-w-6xl mx-auto'>
      <p className=" text-orange-900 mb-4 ">Shop</p>
      <h2 className='text-3xl font-medium font-playfair mb-4'>With love from Caffied</h2>
      <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

      <div className=" md:grid gap-4 grid-cols-3 grid-rows-2 max-w-6xl mx-auto  " >
        {
          products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card  product={product} />
            </Link>
          )
          )
        }
      </div>

    </section>
        </>
  )
}

export default Shop