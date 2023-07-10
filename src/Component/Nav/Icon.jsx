import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const Icon = () => {
  return (
    <>
      <div className="flex mx-auto gap-6 items-center">
        <AiOutlineSearch className="w-6 h-6 rotate-90 sm:hidden md:inline" />
        <span className="flex items-center gap-1">
          <FiShoppingCart className="w-6 z-50 h-6 " />
          <div className="h-5   w-5  bg-[#445f84] rounded-full text-center">
            <span className="text-white text-xs ">5</span>
          </div>
        </span>
      </div>
    </>
  );
};

export default Icon;
