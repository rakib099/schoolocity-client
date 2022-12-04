import React from 'react';
import './ClassCard.css';
import { Card, Col } from 'react-bootstrap';
import { FaRegClock } from 'react-icons/fa';

const ClassCard = (props) => {
    const { id, title, img, duration, price } = props.class;

    return (
        <Col>
            <Card className='shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <hr />
                    <div className='d-flex justify-content-between mb-2'>
                        <div className='d-flex align-items-center text-secondary gap-1'>
                            <FaRegClock />
                            <span>{duration} hours</span>
                        </div>
                        <Card.Text className='fw-semibold'>${price}</Card.Text>
                    </div>
                    <div className='btn-container text-center'>
                        <button className='btn-details'>See Details</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ClassCard;