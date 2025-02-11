import React, { useState , useEffect } from 'react';

export default function Modal({ show, onClose ,id}) {
  // if (!show) {
  //   return null; 
  const [data,setData] = useState({})
  const api = async ()=>{
    let response = await fetch(`http://localhost:3000/product/${id}`);
    let result = await response.json();
    console.log(result)
    setData(result)
  }

  useEffect(()=>{
    api();
  },[])

  return (
    <div>
      {
        data.title
      }
    </div>
  );
}
