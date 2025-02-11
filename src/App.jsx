import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import Categories from './Pages/Categories'
import Products from './Pages/Products'
import Blog from './Pages/Blog'
import SingleProducts from './Pages/SingleProducts'
import Cart from './Pages/Cart'
import CartContextProvider from './context/cart context/CartContextProvider'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Contact from './Pages/Contact'
import SizeChart from './Pages/SizeChart'
import About from './Pages/About'
import Faq from './Pages/Faq'
import ViewAll1 from './Pages/ViewAll1'
import Login from './Pages/Login'
import Model from './Components/Model'
import ProtectedRoute from './ProtectedRoute'


export default function App() {

  const [productId,setProductId] = useState(1);

  function handleId (id){
    console.log(id)
    setProductId(id)
  }

  const [cart,setCart] =useState([]);

  const remove = (index)=> {
    const newItems = cart.filter((item,i)=> i != index)
    setCart(newItems)
  }

  const quantity = (index, value) => {
    const updatedCart = [...cart]; 
    const updatedQuantity = updatedCart[index].quantity + value;
  
    if (updatedQuantity > 0) { 
      updatedCart[index].quantity = updatedQuantity; 
      setCart(updatedCart); 
    }
  }
  
  




  const addToCart = (item) => {
    // Check if the item is already in the cart (assuming items have an 'id' property)
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
  
    // If the item is not already in the cart, add it
    if (!isItemInCart) {
      setCart([...cart, item]);
      
    }
  
    console.log(cart);
  };

  const [data,setData] = useState([]);


  const api = async ()=>{
    let response = await fetch('http://localhost:3000/product');
    let result = await response.json();
    let menProducts = result.slice(0,8);
    setData(menProducts);
    console.log(menProducts);
  }

  useEffect(()=>{
    api();
  },[])


 

  return (
    <>
<CartContextProvider>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout cartLength={cart}/>} >
      <Route index element={<Home addtocart={addToCart} handleId={handleId}/>}/>
      <Route path='/Pages/Categories' element={<Categories/>}/>
      <Route path='/Pages/Products' element={<Products/>}/>
      <Route path='/Pages/Blog' element={<Blog/>}/>
      <Route path='/Pages/Cart' element={<Cart cartItems={cart} remove={remove}  quantity={quantity}/>}/>
      <Route path='/Product/:id' element={<SingleProducts cart={cart} addtocart={addToCart} quantity={quantity}/>}/>
      <Route path='/Pages/Mens' element={<Mens addtocart={addToCart}/>}/>
      <Route path='/Pages/Womens' element={<Womens addtocart={addToCart}/>}/>
      <Route path='/Pages/contact' element={<Contact/>}/>
      <Route path='/Pages/About' element={<About/>}/>
      <Route path='/Pages/Faq' element={<Faq/>}/>
      <Route path='/Pages/SizeChart' element={<SizeChart/>}/>
      <Route path='/Pages/ViewAll1' element={<ViewAll1/>}/>
      <Route path='/Pages/Login' element={<Login/>}/>
      <Route path='/Components/Model' element={<Model data={data} id={productId}/>}/>
      <Route path='/Pages/Protectedroute' element={<ProtectedRoute/>}/>
      
      </Route>

    </Routes>
    </BrowserRouter>
</CartContextProvider>




    </>
  )
}
