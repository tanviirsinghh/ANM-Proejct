import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/Logo.png"

const Navbar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-16 mr-4" />
            <NavLink to="/home" className="text-white font-bold text-xl">
              TutorFinder
            </NavLink>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <NavLink
                to="/home"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Blogs
              </NavLink>
              <div className="relative">
                <NavLink to="/AskanExpert">
                  <button
                    onClick={handleDropdownToggle}
                    onBlur={handleDropdownClose}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    Ask & Answer
                  </button>
                </NavLink>
            
              </div>
              <NavLink
                to="/WriteAReview"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Reviews
              </NavLink>
              <NavLink
                to="/contactus"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            {/* Signup - login */}
            <div className="flex space-x-4">
              {!props.isLoggedIn && (
                <NavLink
                  to="/signup"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </NavLink>
              )}
              {!props.isLoggedIn && (
                <NavLink
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <button>Login</button>
                </NavLink>
              )}
              {props.isLoggedIn && (
                <NavLink
                  to="/home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  LogOut
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
