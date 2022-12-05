import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import RightSideBar from '../RightSideBar/RightSideBar';

const Checkout = () => {
    const classDetails = useLoaderData();
    const {title} = classDetails;

    return (
        <Row className='flex-column-reverse flex-lg-row'>
            <Col lg="9">
                <CheckoutForm />
            </Col>
            <Col lg="3" className='bg-light'>
                <RightSideBar classDetails={classDetails} />
            </Col>
        </Row>
    );
};

export default Checkout;