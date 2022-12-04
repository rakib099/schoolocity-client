import React from 'react';
import './Classes.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ClassCard from '../ClassCard/ClassCard';
import SideBar from '../SideBar/SideBar';

const Classes = () => {
    const classes = useLoaderData();
    console.log(classes);

    return (
        <Container>
            <Row>
                <Col lg="3" className='bg-light'>
                    <SideBar />
                </Col>
                <Col lg="9">
                    <div className='my-4'>
                        <h3 className='mb-3 text-center classes-title'>Choose your desired class and enroll</h3>
                        <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            classes.map(cls => <ClassCard 
                            key={cls.id}
                            class={cls}
                            />)
                        }
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Classes;