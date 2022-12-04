import React, { useContext } from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signIn, providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
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

    return (
        <Container className='my-4 form-container'>
            <h2 className='mb-3 login-title'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Text className="text-muted">
                </Form.Text>
                <button className='btn-submit' type='submit'>Login</button>
            </Form>


            <p className='mt-2'>
                <small>New to this website? <Link to="/register">Click here to register!</Link></small>
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

export default Login;