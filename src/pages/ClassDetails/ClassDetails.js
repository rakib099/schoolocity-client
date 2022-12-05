import React from 'react';
import './ClassDetails.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SideBar from '../Classes/SideBar/SideBar';
import { FaRegClock, FaRegFileAlt, FaUserAlt } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';

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
                                <div className='img-container'>
                                    <img src={img} alt="class-img" />
                                </div>
                            </Col>
                            <Col>
                                <Card className='course-info'>
                                    <Card.Body className='course-info-body bg-light'>
                                        <div>
                                            <div className='info-parts'>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <FaUserAlt />
                                                    <span className='mx-2'>Students: </span>
                                                    <span className='value'>{students}</span>
                                                </div>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <FaRegFileAlt />
                                                    <span className='mx-2'>Lessons: </span>
                                                    <span className='value'>{lessons}</span>
                                                </div>
                                            </div>
                                            <div className='info-parts'>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <GrMoney />
                                                    <span className='mx-2'>Price:</span>
                                                    <span className='value'>${price}</span>
                                                </div>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <FaRegClock />
                                                    <span className='mx-2'>Duration: </span>
                                                    <span className='value'>{duration} hours</span>
                                                </div>
                                            </div>
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