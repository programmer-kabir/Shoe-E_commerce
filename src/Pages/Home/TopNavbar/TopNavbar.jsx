import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <p>USD</p>
        <p>ENG</p>
      </div>

      <div className="hidden md:flex  gap-4 text-gray-400">
        <p className="text-gray-400 text-sm">CALL: +0123 456 789</p>
        <p className="text-gray-400 text-sm">MY WISHLIST(0)</p>
        <p className="text-gray-400 text-sm">ABOUT US</p>
        <p className="text-gray-400 text-sm">CONTACT US</p>
        <Link to='/login'> <p className="text-gray-400 text-sm pb-2">LOGIN</p></Link>
      </div>
      <div className="md:hidden">
        <div>
          <div
            onMouseLeave={handleMouseLeave}
            className="container flex justify-center mx-auto"
          >
            <div className="relative">
              {/* Dropdown toggle button */}
              <button
                onMouseOver={handleMouseOver}
                className="flex items-center  bg-white rounded-md"
              >
                <span className="">afs</span>
                <svg
                  className="w-6 h-6  text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isOpen && (
                <div className="absolute z-50 right-40 -left-28 w-48 px-2  mt-2 py-4 bg-gray-100 rounded-md shadow-xl">
                  <p className="text-gray-400 text-sm pb-2">
                    CALL: +0123 456 789
                  </p>
                  <p className="text-gray-400 text-sm pb-2">MY WISHLIST(0)</p>
                  <p className="text-gray-400 text-sm pb-2">ABOUT US</p>
                  <p className="text-gray-400 text-sm pb-2">CONTACT US</p>
                 <Link to='/login'> <p className="text-gray-400 text-sm pb-2">LOGIN</p></Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
