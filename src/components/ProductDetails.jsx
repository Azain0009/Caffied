import { Link, useParams } from 'react-router-dom';
import products from './data';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const ProductDetails = ({ cartItems, setCartItems}) => {
    const { productId } = useParams();
    const thisProduct = products.find((product) => product.id == productId);
    const { name, description, price, image } = thisProduct;

    const handleAddAndIncrement = (item) => {
        const existingProduct = cartItems.find(i => i.id == item.id)
        if (existingProduct) {
            setCartItems(
                cartItems.map((i) => i.id == item.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : i)
            )
        }
        else {
            setCartItems([...cartItems, { ...item, quantity: 1 }])
            console.log(cartItems)
        }
    }
    return (
        <>

            <div className="bg-gray-900 pb-12 mb-4"></div>
            <div className='container mx-auto p-4'>
            <Link  to="/shop" ><ArrowBackIosNewIcon/></Link>
            </div>
            <section className='sm:text-left md:text-center p-4 mb-4 max-w-5xl mx-auto'>
                <div className="md:flex space-y-4 gap-4">
                    <div className="product-img">
                        <img src={"../" + image} />
                    </div>
                    <div className="flex flex-col justify-between  text-left">
                        <div>
                            <h2 className="text-3xl font-medium font-playfair mb-8">{name}</h2>
                            <p className='text-2xl mb-8'>$ {price}</p>
                            <p className='leading-7 mb-8 text-slate-500'>{description}</p>
                            <p className='mb-4'>Availability: <span className='text-slate-500'>In Stock</span></p>
                            <div className="">
                                <button onClick={() => handleAddAndIncrement(thisProduct)} className='inline-block p-2 px-6 border-solid border-2 rounded border-gray-900 hover:bg-gray-900 hover:text-white text-center cursor-pointer '>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default ProductDetails