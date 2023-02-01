import { Link } from "react-router-dom"
import SingleCartItem from "./SingleCartItem"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EmptyCart from "./EmptyCart";


const Cart = ({ cartItems,addOneToCart,removeOneFromCart,deleteFromCart }) => {
  return (
    <>
      

      <div className="bg-gray-900 pb-12 mb-4"></div>
      <div className='container mx-auto p-4'>
            <Link  to="/shop" ><ArrowBackIosNewIcon/></Link>
            </div>
      <section className='sm:text-left md:text-center p-4 mb-4 max-w-5xl mx-auto'>
        <p className=" text-orange-900 mb-4 ">WITH LOVE</p>
        <h2 className='text-3xl font-medium font-playfair mb-4'>Your Cart</h2>
        <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        {
          cartItems.length === 0 && <EmptyCart />
        }

        <div className="bg-slate-100">

          {/* Single Item */}
          {
            cartItems.map((item) => (
              <SingleCartItem key={item.id} addOneToCart={addOneToCart} deleteFromCart={deleteFromCart} removeOneFromCart={removeOneFromCart} item={item}/>

            ))
          }

        </div>

      

      </section>

    </>
  )
}

export default Cart