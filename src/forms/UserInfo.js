import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './UserInfo.scss'
import { auth } from '../firebase'
import { serverURI } from '../constants'
import Axios from 'axios';

export function UserInfo() {
    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const login = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(
                console.log('TODO: redirect to home page')
            )
            .catch(err => console.log(err))
    }

    const createAccount = () => {
        Axios.post(`${serverURI}/createUser`, {
            user: {
                name: name,
                username: username,
                email: email,
                password: password
            }
        })
    }

    return (
        <div className="entering">
            <Card className="userForm">
                <Card.Body>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="content">
                        <Tab eventKey="profile" title="Log In" className="switch">
                            <Form>
                                <h3 className="message">Welcome Back!</h3>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="proceed" onClick={login}>
                                    Log In
                            </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="home" title="Sign Up" className="switch">
                            <Form className="fields">
                                <h3 className="message">Create an account</h3>
                                <Form.Group controlId="formName" class="">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full Name" onClick={e => setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formUserName" class="">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Username" onClick={e => setUsername(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label >Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onClick={e => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onClick={e => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="proceed" onClick={createAccount}>
                                    Sign Up
                            </Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </div>
    )
}