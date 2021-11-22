import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-body">
                        <h3>Specializing cosmetic dental surgery</h3>
                        <p>Donec augue urna, viverra sit amet libero ut, mollis pretium ante. Donec feugiat non dolor eu eleifend.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-body">
                        <h3>Our smiles speak themselves</h3>
                        <p>A talented team of dentists recognized for the high quality of their dental procedures.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-body">
                        <h3>What is more IMPORTANT to you?</h3>
                        <p>A talented team of dentists recognized for the high quality of their dental procedures.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;