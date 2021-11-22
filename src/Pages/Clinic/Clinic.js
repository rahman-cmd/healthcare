import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Clinic = () => {
    return (
        <div className="m-5">
            <Container>
                <Row>
                    <Col>
                        <img src="https://thegenius.co/dentistry/live2/wp-content/uploads/2016/07/dentistry_care.jpg" width="500" alt="" />
                    </Col>
                    <Col><h2>Morden Dentistry Clinic</h2>
                        <p>We offer a wide-range of dental services at the General Clinic.You will be provided with a comprehensive treatment plan prior to the start of any dental services.To make an appointment or learn more about the services available at the Dentistry clinic please call on.</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h2>Our treatment price starting from</h2>
                        <p>Best pricing for each treatment with before and after care</p>
                        <Table>
                            <thead>
                                <tr>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Teeth Whitening</td>
                                    <td>$220
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Restorations</td>
                                    <td>$220
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>implant Dentistry</td>
                                    <td>$165
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Gum Treatment</td>
                                    <td>$110
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Smile Design</td>
                                    <td>$167
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Conscious Sedation</td>
                                    <td>$169
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Clinic;