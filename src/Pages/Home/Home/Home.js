import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Information></Information>
        </div>
    );
};

export default Home;