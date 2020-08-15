import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './UserInfo.scss'

export function UserInfo() {
    return (
        <Card className="userForm">
            <Card.Body>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="content">
                    <Tab eventKey="home" title="Sign Up" className="switch">
                        <Form className="fields">
                            <h3 className="message">Create an account</h3>
                            <Form.Group controlId="formName" class="">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" />
                            </Form.Group>

                            <Form.Group controlId="formUserName" class="">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="proceed">
                                Sign Up
                            </Button>
                        </Form>
                    </Tab>
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
                            <Button variant="primary" type="submit" className="proceed">
                                Login
                            </Button>
                        </Form>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}