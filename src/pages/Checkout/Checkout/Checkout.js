import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RightSideBar from '../RightSideBar/RightSideBar';

const Checkout = () => {
    const classDetails = useLoaderData();
    const {title, img, price} = classDetails;

    return (
        <Row>
            <Col lg="9">
                
            </Col>
            <Col lg="3" className='bg-light'>
                <RightSideBar classDetails={classDetails} />
            </Col>
        </Row>
    );
};

export default Checkout;