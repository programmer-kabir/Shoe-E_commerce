import React, { useState } from "react";

const SmallNav = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div
        onMouseLeave={handleMouseLeave}
        className="container flex justify-center mx-auto"
      >
        <div className="relative">
          {/* Dropdown toggle button */}
          <button
            onMouseOver={handleMouseOver}
            className="flex items-center   rounded-md"
          >
            <span className="">{name}</span>
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
            <div className="absolute right-0 left-0 w-48 py-2 mt-2  rounded-md shadow-xl">
              <a
                href="#"
                className="block px-16 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white"
              >
                page 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white"
              >
                page 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white"
              >
                page 3
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white"
              >
                page 4
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallNav;
