import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const Classes = () => {
    return (
        <Container>
            <Row>
                <Col lg="3">
                    <SideBar />
                </Col>
                <Col lg="9">
                    <div>
                        <h3>Choose your desired course:</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Classes;