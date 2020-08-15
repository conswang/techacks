import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/colab.png';
import listing from '../assets/book.png';
import avatar from '../assets/avatar.png';

export function Navigation() {
    return (
        <>
            <Navbar sticky="top" expand="lg" >
                <Navbar.Brand href="/" className="mr-auto">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="60"
                    />{' '}
                    CoLab
                </Navbar.Brand>
                <Nav activeKey="/" >
                    <Nav.Item>
                        <Nav.Link href="/listings">
                            <img
                                alt=""
                                src={listing}
                                width="40"
                                height="40"
                            />{' '}Listings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profiles">
                            <img
                                alt=""
                                src={avatar}
                                width="40"
                                height="40"
                            />{' '}Profiles</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

