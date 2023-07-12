import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Banner from '../Pages/Home/Banner/Banner';
import Gallery from '../Pages/Home/Gallery/Gallery';
import Discount from '../Pages/Home/Discount/Discount';
import NewArrivals from '../Pages/Home/NewArrivals/NewArrivals';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Discount />
            <NewArrivals />
            <br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Home;