import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="m-5 p-3">
            <h3>Contact Form</h3>
            <Container className="mt-3">
                <Row>
                    <Col sm={8}>
                        <div className="google-map-code">
                            <iframe src="https://maps.google.com/maps?q=Mirpur%20General%20Hospital&t=&z=13&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;