import React from 'react';
import Faq from '../../Booking/FAQ/Faq';
import Clinic from '../../Clinic/Clinic';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="mt-2" id="home">
            <Banner></Banner>
            <Services></Services>
            <Clinic></Clinic>
            <Faq></Faq>
        </div>
    );
};

export default Home;