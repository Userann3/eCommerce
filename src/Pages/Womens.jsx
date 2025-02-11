import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiGrid41 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";

export default function Womens({addtocart}) {

  const [data , setData] = useState([]);

  const [data2 , setData2] = useState([]);

  const notify = () => toast("You liked the item");


  const api = async ()=>{
    let response = await fetch('http://localhost:3000/product');
    let result = await response.json();
    let menProducts = result.slice(0,8);
    setData(menProducts);
    console.log(menProducts);
  }

  const api2 = async ()=>{
    let response = await fetch('http://localhost:3000/product');
    let result = await response.json();
    let womenProducts = result.slice(8,17);
    setData2(womenProducts);
    console.log(womenProducts);
  }

  useEffect(()=>{
    api();
    api2();
  },[])

  return (
    <>
       <ToastContainer position="top-left" />

       <div className="container border mens-container d-flex justify-content-between p-5 rounded-5 mt-5">

        <div>
        <h1>women</h1>
        <p className='fs-5'><Link to={'/'} className='text-secondary'>Home</Link> <CiPlay1 /> <span className='text-primary'> Women</span></p>
        <p>Welcome to our collection, where excitement meets to keeping you at the forefront of  discovery. We're committed to keeping you at the forefront of  to keeping you at the forefront of  We're committed to keeping you at the forefront of fashion fashion, technology, and lifestyle trends.</p>
        </div>

        <div className='mens-img'>
          <img src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_10_600x.png?v=1692607375" alt="" />
        </div>

       </div>

       {/* <div className="container mt-4">
        <CiGrid41  className='ms-4 fs-2'/>
        <CiBoxList className='ms-4 fs-2'/>
       </div> */}

       <div className="container mens-product-div mt-3">
       <div className="collection-men-row1 d-flex flex-wrap">
              
              {
                data2.map((product)=>{
                  return(
                    <div className='main-card card ms-3 mt-3' key={product.id}>
                      <Link to={`/Product/${product.id}`}>
                      <img src={product.images} alt="" className='cards'/>
  
                      </Link>
  
                      <div className='d-none hover-icons d-flex justify-content-center gap-2'>
                        <div className='fs-3 bg-white p-2'><CiShoppingCart onClick={()=>{addtocart(product)}}/></div>
                        <div className='fs-3 bg-white p-2'><CiHeart onClick={notify} /></div>
                        <div className='fs-3 bg-white p-2'><CiRead /></div>
                      </div>
  
                      <center>
                      <h5 className=' mt-2 text-primary-emphasis'>{product.title}</h5>
                     <div>
                     {product.id == 1 || product.id == 3 || product.id == 4 || product.id == 5 || product.id == 8  ? (
                <p>
                  <span className="text-decoration-line-through fs-6">Rs. 2,000.00</span> &nbsp;
                  <span className="text-primary fs-5">Rs.{product.price}</span>
  
                  <div className='rounded-color d-flex gap-1 justify-content-center'>
                    <div className='bg-primary p-2'> </div>
                    <div className='bg-danger p-2'> </div>
                    <div className='bg-black p-2'> </div>
                  </div>
                </p>
              ) : (
                <p className='text-bold fs-5'>Rs.{product.price}</p>  
              )}
                     </div>
                      </center>
                    </div>
                  )
                })
              }              
            
          </div>
       </div>
    </>
  )
}
