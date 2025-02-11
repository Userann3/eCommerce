import React from 'react'
import Login from './Pages/Login';
import Cart from './Pages/Cart';



    const isProtected = ()=>{
        const data = JSON.parse(localStorage.getItem('loginData'));
        return data ? true : false;;
    }

    const ProtectedRoute = ()=>{
        return isProtected() ? <Cart/>:<Login/>
    }

    export default ProtectedRoute;
