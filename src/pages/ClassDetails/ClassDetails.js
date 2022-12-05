import React from 'react';
import './ClassDetails.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import SideBar from '../Classes/SideBar/SideBar';
import { FaRegClock, FaRegFileAlt, FaRegFilePdf, FaUserAlt } from 'react-icons/fa';
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

                        <div className="heading d-flex align-itmes-center gap-3 mt-3 mb-2">
                            <h2>{title}</h2>
                            <span
                                title='Download PDF'
                                className='fs-4 download-pdf'>
                                <FaRegFilePdf />
                            </span>
                        </div>
                        <p>{description || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione dicta numquam eligendi voluptas minima esse minus fuga cumque a vitae blanditiis ut, quibusdam odit unde excepturi deleniti aliquam porro? Numquam quibusdam doloribus, totam voluptate autem nostrum, repellat optio nam iste cum expedita unde ad recusandae aut sapiente excepturi placeat ea."}</p>

                        {/* Premium Access Button */}
                        <div className='btn-container text-center'>
                            <Link to={`/class-${id}/checkout`}>
                                <button className='btn-details'>Get Premium Access</button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Col>
        </Row>
    );
};

export default ClassDetails;