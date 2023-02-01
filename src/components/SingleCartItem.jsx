const SingleCartItem = ({item, removeOneFromCart, addOneToCart, deleteFromCart }) => {
    



    return (
        <>
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center ">
            <img className="w-40 flex-1" src={item.image} alt="" />
            <h2 className="flex-1 font-bold">{item.name}</h2>
            <div className="flex space-x-4">
            <button  onClick={() =>removeOneFromCart(item.id)} className=" flex-1 font-bold">-</button>
            <h1>{item.quantity}</h1>
            <button onClick={() => addOneToCart(item.id)} className="flex-1 font-bold">+</button>
            </div>
            <p className="flex-1">$ {item.price}</p>
            <button className="border-2  border-black  rounded-lg p-2" onClick={() => deleteFromCart(item.id)} >Remove</button>

         
         
        </div>
        <p className="text-sm text-center font-bold md:text-right p-4">Total: $ {item.price * item.quantity}</p>
        <div className="flex justify-end">

        <button className="bg-black text-white rounded-lg text-sm text-center font-bold  p-4">Check Out</button>
        </div>
        </>
    )
}

export default SingleCartItem