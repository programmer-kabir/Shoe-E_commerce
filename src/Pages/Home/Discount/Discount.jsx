import React from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BiRotateLeft, BiInfoCircle } from "react-icons/bi";
import { FaLifeRing } from "react-icons/fa";
import Content from "../../../Component/Content/Content";
const Discount = () => {
  const discounts = [
    {
      icon: <HiOutlineRocketLaunch />,
      name: "FREE SHIPPING",
      title: "Orders $50 or more",
    },
    {
      icon: <BiRotateLeft />,
      name: "FREE RETURNS",
      title: "Within 30 days",
    },
    {
      icon: <BiInfoCircle />,
      name: "GET 20% OFF 1 ITEM",
      title: "When you sign up",
    },
    {
      icon: <FaLifeRing />,
      name: "WE SUPPORT",
      title: "24/7 amazing services",
    },
  ];
  return (
    <Content>
      <div className="grid grid-cols-4 gap-5 mx-auto mt-12">
        {discounts.map((discount, index) => (
          <div key={index} className="flex gap-5">
            <div className="text-5xl mb-4 text-[#445f84]">{discount.icon}</div>
            <span>
              <h4 className="text-base font-medium">{discount.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{discount.title}</p>
            </span>
          </div>
        ))}
      </div>
    </Content>
  );
};

export default Discount;
