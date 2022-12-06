import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className='mt-4 mb-5'>
                <h2 className='about-title text-center mb-4'>About us</h2>
                <p className='about-details mx-auto'>
                    <span className='fw-semibold'>Schoolocity</span> is a learning platform for kids to enhance their capabilities and make them curious about exploring the unknown of the world. This platform is dedicated to setting your kid's mindset in such a way that, he/she can explore new eras of life without being fearful. So, come and join. Let's make our kid's future bright together!
                </p>
            </div>
        </Container>
    );
};

export default About;