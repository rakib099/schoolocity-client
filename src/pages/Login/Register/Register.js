import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            handleUpdateProfile(name, photoURL);
            form.reset();
            toast.success("Successfully registered! Now you can log in.");
        })
        .catch(error => console.error(error));
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleChecked = (e) => {
        setAccepted(e.target.checked);
    }

    return (
        <Container className='form-container my-4'>
            <h2 className='mb-3 login-title'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleChecked}
                    type="checkbox" 
                    label="Accept our Terms and Conditions" />
                </Form.Group>

                <Form.Text className="text-muted">
                </Form.Text>
                <button className='btn-submit' type='submit' disabled={!accepted}>Register</button>
            </Form>


            <p className='mt-2'>
                <small>Already have an account? <Link to="/login">Click here to login!</Link></small>
            </p>


            <div className='d-flex align-items-center mt-3'>
                <hr className='w-25' />
                <p className='flex-grow-1 text-secondary text-center m-0'><small>Or use one of these methods below</small></p>
                <hr className='w-25' />
            </div>
            <div className="providers d-flex justify-content-center gap-3 mt-2">
                <Button onClick={handleGoogleSignIn} variant="outline-primary"> <FcGoogle /> Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub /> Github</Button>
            </div>
        </Container>
    );
};

export default Register;