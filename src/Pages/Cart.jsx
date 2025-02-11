import React, { useEffect } from 'react'
import { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";

import { useContext } from 'react';
import CartContext from '../context/cart context/CartContext';

export default function Cart({cartItems,remove,quantity}) {

  
  
  const { count, setCount } = useContext(CartContext);

    const increase = () => {
      setCount(prevCount => prevCount + 1);  
    }
    
    const decrease = () => {
      if (count > 1) {
        setCount(prevCount => prevCount - 1);  
      }
    }


  




  
  return (
    <>
    
        
    <div className='container d-flex justify-content-center gap-3'>

<div className="container border">
        {
          cartItems.map((item,index)=>{
            return(
                  <div className='d-flex gap-3 mt-2'>
                    <div className="card" key={item.id}>
                        <img src={item.images} alt="" />
                    </div>


                    <div className='mt-2'>
                      <h5>{item.title}</h5>
                    <hr />
                      <h6>Rs.{item.price}</h6>
                      

                    <hr />
            
                   <div className='d-flex gap-2'>
                    <span className='border btn fs-3 px-3' onClick={()=>{quantity(index,-1)}}>-</span>
                    <span className='border p-3'>{item.quantity}</span>
                    <span className='border btn fs-3 px-3' onClick={()=>{quantity(index,1)}}>+</span>
                    
                </div>
                <br />
                <div className='fs-4 btn border bg-primary text-white'  onClick={()=>{remove(index)}} ><CiShoppingCart/> <span className=' fs-5'>Remove from cart</span></div>
                    </div>
                    
    </div>
  
                )
            })
        }
</div>
<div className="container border d-flex justify-content-between">
  <div className="">
    <h5>Total Items:</h5>
    <hr />
    <h5>Delivery Charges:</h5>
    <hr />
    <h5>Total:</h5>
    
  </div>
  <div className="">
    <h5>{cartItems.length}</h5>
    <hr />
    <h5>Rs: 49.00</h5>
    <hr />
    <h5>
    {
      cartItems.reduce((total, item) => {
        const price = parseFloat(item.price) || 0; // Ensure price is a number
        const quantity = parseFloat(item.quantity) || 0; // Ensure quantity is a number
        return total + (price * quantity);
      }, 0)
    }
      </h5>
  </div>
</div>


</div>
            
            
        
    
    </>
  )
}
