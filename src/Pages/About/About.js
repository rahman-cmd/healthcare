import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="m-5">
            <Container>
                <Row>
                    <Col>
                        <h2>There are Good Reason to Visit Our Clinic</h2>
                        <p>Dentistry was founded in 2005 by john sinha with the vision of developing high quality and affordable health care infrastructure Chicago,Newyork and California.</p>
                        <p>We offer the entire range of dental treatments and procedures at transparent and printed prices standards for all patients. We are a chain of dental clinics.We are offering specialized treatment by experienced doctor who have care about before and after the treatment.</p>
                    </Col>
                    <Col><img width="400" src="https://thegenius.co/dentistry/live/wp-content/uploads/2016/02/Dental_clinic.jpg" alt="" /></Col>
                </Row>
                <Row className="mt-4">
                    <h3 className="mb-4">The Massive Success of Our Clinic</h3>
                    <Col>
                        <h4>Talented Doctors Team</h4>
                        <p>We have built our dentistry over the strong pillars of 22 MDS surgeons. Our team has expert professionals who are immensely experienced.</p>
                    </Col>
                    <Col>
                        <h4>Our Latest Treatments</h4>
                        <p>Looking for affordable dental care? Find out how you can see a dentist and get work done for free or at ow cost.</p>
                    </Col>
                    <Col>
                        <h4>Affordable Dental Care</h4>
                        <p>we provide dental care to nearly million patients every year. Listed below are some of the services can provide our patients.</p>
                    </Col>
                    <Col>
                        <h4>24/7 Support</h4>
                        <p>Customer support is a range of customer services to assist customers in making cost effective and correct use of a product.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;