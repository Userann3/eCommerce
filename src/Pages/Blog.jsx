import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";



export default function Blog() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="container border mens-container d-flex justify-content-between p-5 rounded-5 mt-5">

<div>
<h1>Latest Blogs</h1>
<p className='fs-5'><Link to={'/'} className='text-secondary'>Home</Link> <CiPlay1 /> <span className='text-primary'> Blogs</span></p>
<p>Welcome to our collection, where excitement meets to keeping you at the forefront of  discovery. We're committed to keeping you at the forefront of  to keeping you at the forefront of  We're committed to keeping you at the forefront of fashion fashion, technology, and lifestyle trends.</p>
</div>



</div>

      <div className="container d-flex justify-content-center gap-4 mt-5">
        <div>
          <div className="blog-img">
            <img src="https://minimalin-demo.myshopify.com/cdn/shop/articles/blog-1_1200x.jpg?v=1690981937" alt="" />
          </div>
          <span className=''><span className='fs-4'><CiCalendarDate /> </span>August 01,2023</span>
          <h6 className='fw-bold mt-2'>The Art of Layering: Creating Stylish and Functional <br /> Outfits</h6>
          <p className='text-primary fw-bold'>Read more</p>
        </div>

        <div>
          <div className="blog-img">
            <img src="https://minimalin-demo.myshopify.com/cdn/shop/articles/blog-2_1200x.jpg?v=1690982050" alt="" />
          </div>
          <span className=''><span className='fs-4'><CiCalendarDate /> </span>August 01,2023</span>
          <h6 className='fw-bold mt-2'>A Glimpse into Men's Fashion Trends: What's Hot and What's Not </h6>
          <p className='text-primary fw-bold'>Read more</p>
        </div>
        
        <div>
          <div className="blog-img">
            <img src="https://minimalin-demo.myshopify.com/cdn/shop/articles/blog-3_1200x.jpg?v=1690982279" alt="" />
          </div>
          <span className=''><span className='fs-4'><CiCalendarDate /> </span>August 01,2023</span>
          <h6 className='fw-bold mt-2'>The Art of Layering: Creating Stylish and Functional <br /> Outfits</h6>
          <p className='text-primary fw-bold'>Read more</p>
        </div>
      </div>


      <div className="new-div container d-flex flex-column justify-content-center align-items-center p-5 mt-5">
        <h2>Newsletter</h2>
        <p>Learn about our most recent news, updates, and deals by subscribing.</p>
        <input type="email" placeholder='Enter your Email' className='mt-2'/><button className='mt-4'>Subscribe</button>
      </div>
    </>
  )
}
