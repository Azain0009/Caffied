import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Shop from './components/Shop';
import Homepage from './components/pages/Homepage';
import ProductDetails from './components/ProductDetails';

import products from "../src/components/data";

import {useState} from "react";
import Cart from "./components/Cart"
function App() {

  const [cartItems, setCartItems] = useState([]);
  
  function cartItemsCount() {
    return cartItems.length
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id)
    if (quantity === 0) {
        setCartItems([...cartItems, { id: id, quantity: 1 }])
    } else {
        setCartItems(cartItems.map(item =>
            item.id === id
                ?
                { ...item, quantity: item.quantity + 1 }
                :
                item
        ))
    }
}

 
function removeOneFromCart(id) {
  const quantity = getProductQuantity(id)
  if (quantity === 1) {
      deleteFromCart(id)
  } else {
      setCartItems(cartItems.map(item =>
          item.id === id
              ?
              { ...item, quantity: item.quantity - 1 }
              :
              item
      ))
  }
}
function getProductQuantity(id) {
  const quantity = cartItems.find(item => item.id === id)?.quantity
  if (quantity === undefined) {
      return 0
  }
  return quantity
}

const deleteFromCart = (id) => {
  setCartItems(cartItems.filter(product => product.id !== id).map(product => {
      if (product.id === id) {
          return { ...product, isInCart: false }
      }
      return product
  }))

}

// function deleteFromCart(id) {
//   const product = cartItems.find(item => item.id === id)
//   return cartItems.filter(item => item.id !== id)
// }

  return (
    <div className="App">
      <Navbar cartItemsCount={cartItemsCount} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop products={products}/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} deleteFromCart={deleteFromCart} addOneToCart={addOneToCart} removeOneFromCart={removeOneFromCart}/>} />

        <Route path="/products/:productId" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>} />
        
      </Routes>
      <Footer />
     

    </div>
  );
}

export default App;
