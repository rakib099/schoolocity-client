import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css';

const FAQ = () => {
    return (
        <section id="sec-faq" className="container my-4">
            <div className="text-center mb-4">
                <h2 className="fw-semibold mb-3 faq-title">Frequently Asked Questions</h2>
                <p className="text-secondary d-none d-md-block"><small>These are some common questions that our users <br /> or
                    audience ask. Feel free to check this out.</small></p>

                <p className="text-secondary d-md-none"><small>These are some common questions that our users or audience ask. Feel
                    free to check this out.</small></p>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Who should take these classes?</Accordion.Header>
                    <Accordion.Body>
                        We have designed these classes for kids (aged 7 or older) to boost their knowledge and curiosity. Our ultimate target is to build our kid's mindset in such a way that they can explore the unknown world without being fearful. So, if it sounds interesting to you, you can enroll your kids in our classes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How do I select a course?</Accordion.Header>
                    <Accordion.Body>
                        Simple! You just need to explore our classes page (which is apparently our home page), see which class fits best for your child and then press "Get Premium Access" button on our class details page and fill out the form. Then, we will notify you about the class enrollment.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Are there prerequisites or language requirements?
                    </Accordion.Header>
                    <Accordion.Body>
                        There are no prerequisites. Our classes are open to students of all backgrounds who are 7 years of age and older.
                        All classes are conducted in English. Video lectures include English subtitles and the option to slow-down, pause, or replay lectures for better retention. Discussion boards are a critical component of each of our classes; therefore, we suggest students have a conversational knowledge of English when pursuing a Certificate of Completion. For any of the art writing classes, students need to be 100% proficient in written English.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    );
};

export default FAQ;