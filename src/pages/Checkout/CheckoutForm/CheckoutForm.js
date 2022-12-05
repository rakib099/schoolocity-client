import React from 'react';
import './CheckoutForm.css';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

const CheckoutForm = () => {


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const phone = form.phone.value;
        console.log(name, email, address, phone);

        // form.reset();
        toast.success(`Thank you for submitting the form!`);
        toast(
            "You will be notified shortly about the enrollment!",
            {
                duration: 4000,
            }
            );
        }

    return (
        <Container className='checkout-form-container my-5'>
            <h2 className='mb-3 login-title'>Please Fill out the form to proceed</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" placeholder="Enter your address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" name="phone" placeholder="Enter your phone number" required />
                </Form.Group>

                <Form.Text className="text-muted">
                </Form.Text>
                <button className='btn-submit' type='submit'>Submit</button>
            </Form>
        </Container>
    );
};

export default CheckoutForm;