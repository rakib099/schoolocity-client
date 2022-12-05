import React from 'react';
import './Blog.css';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mt-4 mb-5 questions-container'>
            <h2 className='title mb-3'>Conceptual Questions</h2>
            <div className="questions">
                <div className="question">
                    <h3>1. What is CORS?</h3>
                    <p><span>Ans:</span> CORS stands for Cross-Origin Resource Sharing. It is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                    </p>
                    <p>In Web Dev, we use CORS as a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
                    <p>Historically, Cross-origin support was originally proposed by Matt Oshry, Brad Porter, and Michael Bodell of Tellme Networks in March 2004 for inclusion in VoiceXML 2.1 to allow safe cross-origin data requests by VoiceXML browsers. The mechanism was deemed general in nature and not specific to VoiceXML and was subsequently separated into an implementation NOTE.</p>
                </div>
                <div className="question">
                    <h3>2. Why are you using Firebase?</h3>
                    <p><span>Ans:</span> There are plenty of advantages you get when you use Firebase authentication system. First of all, it's owned by google. So, get can the full package by just signing in by your existing google account. Now, coming back to the point, I'll say, Firebase Authentication provides backend services, easy-to-use SDKs, as well as ready-made UI libraries to authenticate users. Also, it supports various provider login systems such as, google, facebook, twitter and more!
                    </p>
                    <p><span>Other alternatives:</span></p>
                    <ul>
                        <li>Parse</li>
                        <li>Back4App</li>
                        <li>AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>NativeScript</li>
                    </ul>
                </div>
                <div className="question">
                    <h3>3. How does the private route work?</h3>
                    <p><span>Ans:</span> React's private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </p>
                    <p>It's basically a component that takes other components as children, and then it checks whether user is logged in or not. If the user is logged in, it returns the child (meaning, the route user wants to visit). If the user is not logged in, then it will redirect the user to the login page.</p>
                </div>
                <div className="question">
                    <h3>4. What is Node? How does Node work?</h3>
                    <p><span>Ans:</span> Node js is a runtime environment, based on Chrome's V8 JavaScript engine. Point to be noted that it's not a framework or a library. I said that because many people think that way.
                    </p>
                    <p>It is an asynchronous event-driven JavaScript runtime which is designed to build scalable network applications. As it is built on Chrome's V8 engine, if you want to know how node.js work, first you have to understand how the V8 engine works under the hood.</p>
                </div>
            </div>
        </Container>
    );
};

export default Blog;