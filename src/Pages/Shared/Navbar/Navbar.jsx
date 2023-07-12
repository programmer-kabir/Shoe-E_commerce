import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Content from "../../../Component/Content/Content";
import Nav from "../../../Component/Nav/Nav";
import SmallNav from "../../../Component/Nav/SmallNav";
import Icon from "../../../Component/Nav/Icon";
import { FiShoppingCart } from "react-icons/fi";
import TopNavbar from "../../Home/TopNavbar/TopNavbar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <Content>
      <div className="md:fixed z-10 w-[1280px] mx-auto bg-white">
        <TopNavbar />
        <div className="flex  z-50 bg-white   justify-between items-center text-white">

        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

        <ul className="hidden md:flex text-black pr-40">
          <li className="p-4">
            {" "}
            <Nav name="HOME" />{" "}
          </li>
          <li className="p-4">
            {" "}
            <Nav name="SHOP" />{" "}
          </li>
          <li className="p-4">
            {" "}
            <Nav name="PRODUCT" />{" "}
          </li>
          <li className="p-4">
            {" "}
            <Nav name="PAGE" />{" "}
          </li>
          <li className="p-4">
            {" "}
            <Nav name="BLOG" />{" "}
          </li>
          <li className="p-4">
            {" "}
            <Nav name="ELEMENT" />{" "}
          </li>
        </ul>
        <ul className="hidden md:flex text-black ">
          <Icon />
        </ul>
        <div onClick={handleNav} className="block  md:hidden">
          {nav ? (
            <AiOutlineClose size={20} className="text-black" />
          ) : (
            <div className="flex items-center gap-2 font-semibold">
              <FiShoppingCart className="w-6 h-6 text-black" />
              <AiOutlineMenu size={20} className="text-black" />
            </div>
          )}
        </div>
        <div
          className={
            nav
              ? "fixed  left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <ul className="">
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
              REACT.
            </h1>
            <li className="p-4 te">
              <SmallNav className="" name="HOME" />{" "}
            </li>
            <li className="p-4">
              {" "}
              <SmallNav name="SHOP" />{" "}
            </li>
            <li className="p-4">
              {" "}
              <SmallNav name="PRODUCT" />{" "}
            </li>
            <li className="p-4">
              {" "}
              <SmallNav name="PAGE" />{" "}
            </li>
            <li className="p-4">
              {" "}
              <SmallNav name="BLOG" />{" "}
            </li>
            <li className="p-4">
              {" "}
              <SmallNav name="ELEMENT" />{" "}
            </li>
          </ul>
        </div>
        </div>
      </div>
    </Content>
  );
};

export default Navbar;
