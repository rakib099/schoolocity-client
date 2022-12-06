import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import { FaRegClock, FaRegFileAlt, FaRegFilePdf, FaUserAlt } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';


const Details = ({ details }) => {
    const { id, img, title, description, duration, price, lessons, students } = details;
    const ref = React.createRef();

    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [11, 10]
    };

    return (
        <ReactToPdf filename="class-details.pdf" options={options} x={.5} y={.5} scale={0.8}>
            {({ toPdf, targetRef }) => (
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

                        <div className="header-detail-container"
                            ref={targetRef}>
                            <div className="heading d-flex gap-3 mt-3 mb-2">
                                <h2>{title}</h2>
                                <span
                                    onClick={toPdf}
                                    title='Download PDF'
                                    className='fs-4 download-pdf'>
                                    <FaRegFilePdf />
                                </span>
                            </div>
                            <p className='pe-4 text-justify'>This class is for curious kids out there who want to learn and explore new things. In this class they will learn about basic <span className='fw-semibold value'>{description}</span>. And they will be able to explore the fundamentals of <span className='fw-semibold value'>{description}</span>. This class designed in a way so that the kids can learn new things in a fun way! Thus, this class will push them to learn more about the unknown.</p>
                            <p>If you are interested in this class and want your child to enroll in this class, please <span className='fw-semibold value'>click</span> the button below.</p>

                            {/* Premium Access Button */}
                            <div className='btn-container text-center'>
                                <Link to={`/class-${id}/checkout`}>
                                    <button className='btn-details'>Get Premium Access</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            )}
        </ReactToPdf>


    );
};

export default Details;