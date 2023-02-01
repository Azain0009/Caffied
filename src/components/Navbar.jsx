
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Link } from 'react-router-dom';



function Navbar({cartItemsCount}) {
  return (
    <div className="container mx-auto p-4 flex justify-between">
      
        <div className="text-xl">
          <Link to="/">
            <h1 className=' text-center font-playfair cursor-pointer'>CAFFIED.</h1>
          </Link>
          
        </div>

        {/* <div className="flex gap-3 justify-end ">
          <Link to='/cart' >
                <ShoppingCartOutlinedIcon />
          </Link>
        </div> */}
        <div className="flex gap-3 justify-end h-7 w-7 ">
        <Link to='/cart' >
                {/* <button className='circle realtive flex'>
                <ShoppingCartOutlinedIcon />
                <div className="bg-gray-900 rounded-full flex justify-items-center align-center text-white px-2"></div>
                </button> */}
                 <span className="relative inline-block">
                        <AiOutlineShoppingCart size={25} className='cursor-pointer' />
                        <span className={`${cartItemsCount() > 0 ? "opacity-100" : "opacity-0"} absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full`}>{cartItemsCount() > 0 && cartItemsCount()}</span>

                    </span>
          </Link>
        </div>
    </div>
  )
}

export default Navbar