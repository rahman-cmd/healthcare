import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const ExactIteam = data.filter(td => td.id == serviceId);
    console.log(ExactIteam)
    return (
        <Container>
            <Row xs={1} md={2} className="g-4 m-2">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={ExactIteam[0]?.img} alt="" />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{ExactIteam[0]?.name}</Card.Title>
                            <Card.Text>{ExactIteam[0]?.description}</Card.Text>
                            <Card.Body>{ExactIteam[0]?.full_description}</Card.Body>
                            <Card.Footer>
                                <NavLink to="/home">
                                    <button className="btn btn-primary">Back</button>
                                </NavLink>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;