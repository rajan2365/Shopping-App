import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../AllPage/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4">
        <NavLink to="/">
          <div>
            <img src={logo} alt="Logo" className="h-14" />
          </div>
        </NavLink>
        <ul className="flex space-x-8 items-center">
          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

          <li>
            <NavLink to="/" className="hover:text-gray-700 transition-colors font-bold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/card" className="hover:text-gray-700 transition-colors">
            <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
          </li>
                  </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
