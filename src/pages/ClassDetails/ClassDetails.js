import React from 'react';
import './ClassDetails.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import SideBar from '../Classes/SideBar/SideBar';
import { FaRegClock, FaRegFileAlt, FaRegFilePdf, FaUserAlt } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import Details from './Details/Details';

const ClassDetails = () => {
    const details = useLoaderData();

    return (
        <Row>
            <Col lg="3" className='bg-light d-none d-lg-block'>
                <SideBar />
            </Col>
            <Col lg="9">
                <Details details={details} />
            </Col>
        </Row>
    );
};

export default ClassDetails;