import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/colab.png';
import listing from '../assets/book.png';
import avatar from '../assets/avatar.png';
import "./Navbar.scss"


export function Navigation() {
    return (
        <>
            <Navbar sticky="top" className="nbar">
                <Navbar.Brand href="/" className="mr-auto nbTitle">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"

                    />{' '}
                    CoLab
                </Navbar.Brand>
                <Nav activeKey="/" >
                    <Nav.Item>
                        <Nav.Link href="/listings">
                            <img
                                alt=""
                                src={listing}
                                width="30"
                                height="30"
                            />{' '}Listings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profiles">
                            <img
                                alt=""
                                src={avatar}
                                width="30"
                                height="30"
                            />{' '}Profiles</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

