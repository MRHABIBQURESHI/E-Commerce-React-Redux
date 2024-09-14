import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../Redux/Hook/Hook';

function Header() {

  const items = useAppSelector((state) => state.cart.items)
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            Electronix
          </Link>
        </div>

        {/* Menu Button for Mobile */}
        <button 
          onClick={toggleMenu} 
          className="text-white md:hidden focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-8 text-white font-medium ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <li className="mt-2 md:mt-0">
            <Link to="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link to="/products" className="hover:text-yellow-300 transition duration-300">
              Products
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link to="/about" className="hover:text-yellow-300 transition duration-300">
              About
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link to="/blogs" className="hover:text-yellow-300 transition duration-300">
              Blogs
            </Link>
          </li>
          {/* <li className="mt-2 md:mt-0">
            <Link to="/sale" className="hover:text-yellow-300 transition duration-300">
              Sale Product
            </Link>
          </li> */}
          <li className="mt-2 md:mt-0">
            <Link to="/review" className="hover:text-yellow-300 transition duration-300">
              Reviews
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 text-white">
          {/* Cart Icon */}
          <Link to="/cart" className="relative hover:text-yellow-300 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L4 5H2M7 13L6.4 16m10.6-3l-.4 3m0 0h-9l-.4-3m10.8 0L17 21H7l-1-8m10.4 8a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 text-center">
              {items.length}
            </span>
          </Link>

          {/* Dark Mode Icon */}
          <button
            onClick={toggleDarkMode}
            className="hover:text-yellow-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m4.22 1.78l.707-.707m1.767 1.767l-.707-.707m-2.121 9.192A7 7 0 105.29 5.29m12.42 12.42A7 7 0 0012 5V3a9 9 0 019 9 9 9 0 01-8.138 8.899A7 7 0 1019.71 19.71z"
              />
            </svg>
          </button>

          {/* Search Icon */}
          <Link to="/search" className="hover:text-yellow-300 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>

          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-yellow-300 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
