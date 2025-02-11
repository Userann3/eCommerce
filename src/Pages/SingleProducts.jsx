import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../context/cart context/CartContext';

export default function SingleProducts({addtocart,quantity,cart}) {

  const { count, setCount } = useContext(CartContext);

  
  const {id} = useParams();
    console.log(id);
    
    const [product, setProduct] = useState({});
    
    
    
    const api = async ()=>{
        let response = await fetch(`http://localhost:3000/product/${id}`);
        let result = await response.json();
        setProduct(result);
        console.log(result);
    }

    const [mainImage, setMainImage] = useState(product.images);

    

    useEffect(()=>{
        api();
        window.scrollTo(0,0)
    },[]);

    useEffect(() => {
      if (product.images && product.images.length > 0) {
        setMainImage(product.images[0]); // Set the first image as default
      }
    }, [product.images]);

  return (
    <>

    <div className="container d-flex mt-5 gap-5">

        <div className="img">
            <div>
                <img className='main-img' src={mainImage} alt="" />
            </div>
            <div className='d-flex mt-3 justify-content-evenly'>
              {
                product.images?.map((image,index)=>{
                  return(
      <img
              key={index}
              className='small-img2'
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(image)} // Update main image on click
            />
                  )

                })
              }
              
            </div>
        </div>


        <div className="detailes">
            <h3>{product.title}</h3>
            <h4 className='text-primary'>Rs.{product.price} &nbsp; <span className='fs-5 text-secondary'>Save -6%</span></h4> 
            <hr />
            <p>{product.description}</p>
            <hr />
            <div className='d-flex gap-5'>
                <div>
                    <h6>SKU:</h6>
                    <h6>Vendor:</h6>
                    <h6>Type:</h6>
                </div>
                <div>
                    <h6 className='text-secondary'>1510</h6>
                    <h6 className='text-secondary'>Vender j</h6>
                    <h6 className='text-secondary'>Type j  </h6>
                </div>
            </div>
            <hr />
            <div className='d-flex gap-2'>
                <div className='d-flex gap-2'>
               {
                cart.map((itme,index)=>{
                  return(
                    <div key={index}>
                    <span className='border btn fs-3 px-3' onClick={()=>{quantity(index,-1)}}>-</span>

                    <span className='border p-3'>{itme.quantity}</span>
                    <span className='border btn fs-3 px-3' onClick={()=>{quantity(index,1)}}>+</span>
                    
                    </div>
                  )
                })
               }
                </div>
                <div className='fs-4 btn border bg-primary text-white' onClick={()=>{addtocart(product)}}><CiShoppingCart/> <span className=' fs-5'>Add to cart</span></div>
            </div>
            <hr />
            <div><span className='fs-3'><CiDeliveryTruck /></span> Estimated Delivery Date : <span className='fw-bold'>09 - 10 October, 2024.</span>
            <h6 className='fw-bold mt-3'>Return rules summary</h6>
            <ul>
                <li>Returns accepted for 30 days</li>
                <li>No restocking fee</li>
                <li>Free return shipping</li>
                <li>No final sale items</li>
            </ul>
            </div>

            
        </div>
        
    </div>
    
    {/* -------------------------------------------- FAQ */}
    <div className="faq container d-flex justify-content-center mt-5">
    <div className="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-item border">
    <input type="checkbox" id="q1" />
    <label htmlFor="q1" className="faq-question">
      What is your return policy?
    </label>
    <div className="faq-answer">
      <p>
        Our return policy lasts for 30 days. If 30 days have gone by since your
        purchase, we cannot offer a refund or exchange.
      </p>
    </div>
  </div>
  <div className="faq-item">
    <input type="checkbox" id="q2" />
    <label htmlFor="q2" className="faq-question">
      How do I track my order?
    </label>
    <div className="faq-answer">
      <p>
        You will receive an email with tracking information once your order has
        been shipped.
      </p>
    </div>
  </div>
  <div className="faq-item">
    <input type="checkbox" id="q3" />
    <label htmlFor="q3" className="faq-question">
      Can I purchase items in bulk?
    </label>
    <div className="faq-answer">
      <p>
        Yes, bulk purchases are available. Please contact our sales department
        for more details.
      </p>
    </div>
  </div>
  <div className="faq-item">
    <input type="checkbox" id="q4" />
    <label htmlFor="q4" className="faq-question">
      Do you ship internationally?
    </label>
    <div className="faq-answer">
      <p>
        Yes, we ship internationally. Shipping rates will be calculated at
        checkout.
      </p>
    </div>
  </div>
</div>


            </div>
{/* -------------------------------------------------FAQ END */}

<div className="container mt-5 text-center">
    <h2>For furthermore help, contact with our support team.</h2>
    <br />
    <div className='btn border bg-primary text-white px-3 py-2 fs-5'>Contact Us</div>
    <br /> <br />
    <div className='fs-4'><CiPhone />  +0123-456-789</div>
</div>

{/* ---------------- */}

{/* ---------------- */}


    </>
  )
}
