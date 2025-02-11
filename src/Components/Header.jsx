import React, { useEffect } from 'react'
import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink,Link } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";
import { useContext } from 'react';
import CartContext from '../context/cart context/CartContext';

export default function Header({cartLength}) {

  const {count} = useContext(CartContext);
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [img,setImg] = useState();
  const [id,setId] = useState();
  console.log(count)

  function show() {
    let inputDiv = document.getElementById('input-div');
    let inputField = document.getElementById('input-field');
  
    // Hide inputDiv if input is empty
    if (inputField.value === "" || inputField.value === null) {
      inputDiv.style.display = 'none';
      return; // No need to proceed if the input is empty
    }
  
    // Filter through count array and check if the input matches the titles
    count.forEach((data) => {
      if (data.title.toLowerCase().includes(inputField.value.toLowerCase()) || data.title.toLowerCase() == inputField.value.toLowerCase()) {
        console.log(data.title)
        setTitle(data.title)
        setImg(data.images)
        setPrice(data.price)
        setId(data.id)
        console.log(data.id)
      }
    });
  
    // Show inputDiv if there is a match
    inputDiv.style.display = 'block';
  }
  



  


  return (
    <>

      <div className="container-xx bg-black black-header text-white d-flex justify-content-around align-items-center">

        <div className='d-flex BH-itme-1 justify-content-evenly'>
          <div><CiMail /> exapmle@exapmle.com</div>
          <div className='ms-3'><CiLocationOn /> City, State, Zip Code</div>
        </div>

        <div className='BH-item-2 d-flex justify-content-around fs-4'>
        <div className='facebook'><CiFacebook /></div> <div className='insta mx-3'><CiInstagram /></div> <div className='youtube'><CiYoutube /> </div><div className='twitter mx-3'><CiTwitter /></div>
        </div>

      </div>


<div className="  container mt-2">
      <nav className="navbar ">
        <div className="logo">Minimal<span className='logo-span'>in</span></div>
        
        <ul className="menu">
          <li><a href="/">Home</a></li>
          
          <li className="dropdown">
            <span><NavLink to={'/Pages/Categories'}>Categories</NavLink> <SlArrowDown className=' down-arrow mt-1'/></span>
            <ul className="dropdown-menu">
              <li><NavLink to={"/Pages/Mens"}>Aadmi ke latta</NavLink></li>
              <li><NavLink to={"/Pages/Womens"}>janani ke latta</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <span><NavLink to={'/Pages/Products'}>Pages</NavLink> <SlArrowDown className=' down-arrow mt-1'/></span>
            <ul className="dropdown-menu">
              <li><NavLink to={"/Pages/Contact"}>Contact   </NavLink></li>
              <li><NavLink to={"/Pages/About"}>About us  </NavLink></li>
              <li><NavLink to={"/Pages/Faq"}>FaQ       </NavLink></li>
              <li><NavLink to={"/Pages/SizeChart"}>Sizi Chart</NavLink></li>
            </ul>
          </li>

          {/* <li><a href="/blog">Blog</a></li> */}
          <li><NavLink to={'/Pages/Blog'}>Blogs</NavLink></li>
        </ul> 

        <div className="nav-icons">
          <div className='d-flex'>
            <div>
            <input type="text" className='search-input' id='input-field' onChange={show}/>
            <div className='text-black border' id='input-div' style={{display:'none'}}>
              {
                <>
                <h6 className='mt-2 ms-2'>Products</h6>
                <Link to={`/Product/${id}`}>

              <div className='d-flex justify-content-between input-main-div p-2 bg-white'>
                <div className='search-img-div'>
                  <img src={img} alt="" />
                </div>
                <div className='search-title-div'><h6 className='ms-1'>{title}</h6>
                <h6 className='text-primary ms-1'>Rs.{price}</h6>
                </div>
              
              </div>
              </Link>
              </>
              }
            </div>
            </div>
          <div className="cart "><CiSearch className='mb-2 ms-2'/></div>  
          </div>          
          <div className="cart"><CiUser className='mb-2'/></div>
          <div className="user"><Link to='/Pages/ProtectedRoute'><CiShoppingCart className='mb-2'/></Link> <sup>{cartLength.length}</sup></div>
        </div>
      </nav>
    </div>






    </>
  )
}
