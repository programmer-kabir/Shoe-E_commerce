import React, { useEffect, useState } from "react";
import Content from "../../../Component/Content/Content";
import CategoryFilter from "./CategoryFilter";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("all");
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/products/${active}`)
    .then(res => res.json())
    .then(data =>{
      setProducts(data);
    })
  })
  const handleAddClick = (tabName) => {
    setActive(tabName);
  };
  return (
    <Content>
      <div className="mt-16">
        <h2 className="text-2xl text-center font-semibold">New Arrivals</h2>
        <div>
          <button
            onClick={() => {
              handleAddClick("all");
            }}
          >
            ALL
          </button>
          <button
            onClick={() => {
              handleAddClick("women");
            }}
          >
            WOMEN'S
          </button>
          <button
            onClick={() => {
              handleAddClick("men");
            }}
          >
            MEN'S
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-3 mx-9 mt-3">
          {products.map((product) => (
            <CategoryFilter product={product} key={product._id}></CategoryFilter>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default NewArrivals;
