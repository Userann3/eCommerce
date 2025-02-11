import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout({ cartLength }) {
  const location = useLocation();

  // Check if the current path is '/Pages/Login' or '/Pages/ProtectedRoute'
  const isLoginPage = location.pathname === '/Pages/Login';
  const isProtectedRoute = location.pathname === '/Pages/ProtectedRoute';

  // Hide Header and Footer on login and protected route pages
  const hideHeaderAndFooter = isLoginPage || isProtectedRoute;

  return (
    <div>
      {!hideHeaderAndFooter && <Header cartLength={cartLength} />}
      
      <Outlet />
      
      {!hideHeaderAndFooter && <Footer />}
    </div>
  );
}
