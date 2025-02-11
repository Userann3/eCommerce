import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [count, setCount] = useState([]); // Assuming you are fetching an array of products

  const api = async () => {
    try {
      let response = await fetch('http://localhost:3000/product');
      let result = await response.json(); // Await the parsing of the response
      setCount(result); // Set the result into state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
