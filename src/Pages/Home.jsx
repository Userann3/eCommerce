import React, { useEffect } from 'react'
import { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Home({addtocart , handleId}) {


  const notify = () => toast("You liked the item");
  const notifyCart = () => toast("Item Added To Cart");




  const [data,setData] = useState([]);

  const [data2,setData2] = useState([]);

  const [womenProducts,setWomenProducts] = useState(false);

  const [menProducts,setmenProducts] = useState(true);
  

  

  const womenProductsFnc = ()=>{
    setWomenProducts(true);
    setmenProducts(false);
  }

  const menProductsFnc = ()=>{
    setWomenProducts(false);
    setmenProducts(true);
  }

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

  const activeButtonStyle = {
    marginLeft: '10px',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid #0A85D1',
    color: '#0A85D1',
    fontWeight: 'bold',
    fontSize: 'large',
  };

  const defaultButtonStyle = {
    marginLeft: '10px',
    background: 'none',
    border: 'none',
    color: '#000', // Default color for inactive buttons
    fontSize: 'large',
  };

  useEffect(()=>{
    api()
    api2()
  },[])




  return (
    <>

    {/* ----------------------- */}

            <ToastContainer position="top-left" />


    {/* ----------------------- */}

      <div className="container-xx  d-flex justify-content-center mt-3">
        <section class="slider_container">
          <section class="slider">
            <div class="slide one">
              <img src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

              <span class="caption">
                "I like my money right where I can see it…hanging in my closet." —Carrie Bradshaw
              </span>
            </div>
            <div class="slide two">
              <img src="https://images.unsplash.com/photo-1509182469511-7f0b50bfa63e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              {/* <span class="caption">
          slide two
        </span> */}
            </div>
            <div class="slide three">
              <img src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              {/* <span class="caption">
          slide three
        </span> */}
            </div>
            <div class="slide four">
              <img src="https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" alt="" />
              {/* <span class="caption">
          slide four
        </span> */}
            </div>
            <div class="slide four">
              <img src="https://images.unsplash.com/photo-1511335413948-b5966e4e1d01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" alt="" />
              {/* <span class="caption">
          slide five
        </span> */}
            </div>
          </section>
        </section>
      </div>

      <div className="continer-xx d-flex justify-content-center mt-5">

        <div className=''>

          <div className='img'><img src="https://minimalin-demo.myshopify.com/cdn/shop/files/banner-570x360-2_570x.png?v=1694613943" alt="" />

            <div className="text"><p>Suits and Formalwear</p>
              <NavLink to={'/Pages/Mens'}><button className='ms-5 rounded px-3 py-1'>Shop Now</button></NavLink>
            </div>

          </div>

        </div>

        <div className='ms-5 '>

          <div className='img'><img src="https://minimalin-demo.myshopify.com/cdn/shop/files/Untitled_design_8_570x.png?v=1690732046" alt="" />

            <div className="text ms-4 fs-2"><p>Tops and Gowns</p>
            <NavLink to={'/Pages/Womens'}><button className='ms-5 rounded px-3 py-1'>Shop Now</button></NavLink>
            </div>

          </div>

        </div>

      </div>

      <div className="container-xx  mt-5">

        <div className="container  collection">

          <div className="collection-head d-flex justify-content-between">
            <h1>Best Selling</h1>
            <div className="collection-head-btns">
              <button className='men-btn'  style={menProducts ? activeButtonStyle : defaultButtonStyle} onClick={menProductsFnc}>Men</button>
              <button className='women-btn' style={womenProducts ? activeButtonStyle : defaultButtonStyle} onClick={womenProductsFnc}>Women</button>
            </div>
          </div>

          <div className="collection-body-men mt-3">

        {
          menProducts && (
            <div className="collection-men-row1 d-flex flex-wrap">
              
            {
              data.map((product,index)=>{
                console.log(product.images)
                return(
                  <div className='main-card card ms-3 mt-3' key={product.id}>
                    <Link to={`/Product/${product.id}`}>
                    <img src={product.images[0]} alt="" className='cards'/>

                    </Link>

                    <div className='d-none hover-icons d-flex justify-content-center gap-2'>
                      <div className='fs-3 bg-white p-2' onClick={notifyCart}><CiShoppingCart onClick={()=>{addtocart(product)}}/></div>
                      <div className='fs-3 bg-white p-2'><CiHeart onClick={notify} /></div>
                      <div className='fs-3 bg-white p-2'><CiRead onClick={()=>{handleId(`${product.id}`)}}/></div>
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
          
         <div className='container d-flex justify-content-center mt-5'><NavLink to={'/Pages/Mens'}> <button className='px-4 py-2 btn bg-primary text-white fs-5 '>View All</button></NavLink></div>
        </div>
          )
        }


              
        {womenProducts && (
            <div className="collection-men-row1 d-flex flex-wrap">

{
                  data2.map((product)=>{
                    return(
                      <div className='card ms-3 mt-3' key={product.id}>
                        <img src={product.images} alt="" className='cards'/>
                        <center>
                        <h5 className=' mt-2 text-primary-emphasis'>{product.title}</h5>
                        <p className=''>{product.price}</p>
                        </center>
                      </div>
                    )
                  })
                } 
            
            <div className='container d-flex justify-content-center mt-5'><NavLink to={'/Pages/Womens'}> <button className='px-4 py-2 btn bg-primary text-white fs-5 '>View All</button></NavLink></div>
            </div>
          )
        }     


              

          </div>

        </div>

      </div>

      <div className="offer-main container-xx d-flex justify-content-center gap-5 mt-5">
        <div className='d-flex flex-column justify-content-center'>
          <h1 className='offer-text'>Best offer - upto <span className='text-primary'>50%</span></h1>
          <p>Explore our latest New Arrivals & unlock discounts of up to 50% off!</p>
          <NavLink to={'/Pages/Mens'}><button className='btn text-primary fw-bold fs-4 shop-now-btn'>Shop now</button></NavLink>
          <div>
            
          </div>
        </div>
        <div>
          <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/Countdown_banner_4_570x.png?v=1694617479" alt="" />
        </div>
      </div>

      <div className="container-xx marque-main mt-5 py-3">

    <marquee behavior="" direction="">

  <div className='d-flex justify-content-center gap-5'>
  <li>Online Support</li>
          <li>
           No restocking fees
          </li>
          <li>
           100% Online Payment
          </li>
          <li>
           No final sale items
          </li>
          <li>
           Return accepted for 30 days
          </li>
  </div>
        
     </marquee>
      </div>

      <div className="container text-center mt-5">
        <h1>Latest Blogs</h1>
      </div>

      <div className="container d-flex justify-content-center gap-4 mt-5">
        <NavLink to={'/Pages/Blog'}><div>
          <div className="blog-img">
            <img src="https://minimalin-demo.myshopify.com/cdn/shop/articles/blog-1_1200x.jpg?v=1690981937" alt="" />
          </div>
          <span className=''><span className='fs-4'><CiCalendarDate /> </span>August 01,2023</span>
          <h6 className='fw-bold mt-2'>The Art of Layering: Creating Stylish and Functional <br /> Outfits</h6>
          <p className='text-primary fw-bold'>Read more</p>
        </div></NavLink>

        <NavLink to={'/Pages/Blog'}><div>
          <div className="blog-img">
            <img src="https://minimalin-demo.myshopify.com/cdn/shop/articles/blog-2_1200x.jpg?v=1690982050" alt="" />
          </div>
          <span className=''><span className='fs-4'><CiCalendarDate /> </span>August 01,2023</span>
          <h6 className='fw-bold mt-2'>A Glimpse into Men's Fashion Trends: What's Hot and What's Not </h6>
          <p className='text-primary fw-bold'>Read more</p>
        </div></NavLink>
        
       <NavLink to={'/Pages/Blog'}> <div>
          <div className="blog-img">
            <img src="https://minimalin-demo.myshopify.com/cdn/shop/articles/blog-3_1200x.jpg?v=1690982279" alt="" />
          </div>
          <span className=''><span className='fs-4'><CiCalendarDate /> </span>August 01,2023</span>
          <h6 className='fw-bold mt-2'>The Art of Layering: Creating Stylish and Functional <br /> Outfits</h6>
          <p className='text-primary fw-bold'>Read more</p>
        </div>
        </NavLink>
      </div>
      

      





    </>

  )
}
