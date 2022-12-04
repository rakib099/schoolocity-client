import React from 'react';
import './ClassDetails.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SideBar from '../Classes/SideBar/SideBar';
import { FaRegClock } from 'react-icons/fa';

const ClassDetails = () => {
    const { id, img, title, description, duration, price, lessons, students } = useLoaderData();

    return (
        <Row>
            <Col lg="3" className='bg-light'>
                <SideBar />
            </Col>
            <Col lg="9">
                <Container className='d-flex justify-content-center'>
                    <div className="class-details-container my-5">
                        <Row className='mb-2'>
                            <Col>
                                <img src={img} alt="class-img" />
                            </Col>
                            <Col>
                                <Card className='course-info'>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <div className='d-flex align-items-center text-secondary gap-1'>
                                                <FaRegClock />
                                                <span>{duration} hours</span>
                                            </div>
                                            <Card.Text className='fw-semibold'>${price}</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <h2>{title}</h2>
                        <p>{description || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione dicta numquam eligendi voluptas minima esse minus fuga cumque a vitae blanditiis ut, quibusdam odit unde excepturi deleniti aliquam porro? Numquam quibusdam doloribus, totam voluptate autem nostrum, repellat optio nam iste cum expedita unde ad recusandae aut sapiente excepturi placeat ea."}</p>
                        <div className='btn-container text-center'>
                            <button className='btn-details'>Get Premium Access</button>
                        </div>
                    </div>
                </Container>
            </Col>
        </Row>
    );
};

export default ClassDetails;