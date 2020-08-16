import React from 'react';
import './Sidebar.scss';
import { Row, Col, Button } from "react-bootstrap";
import woman from '../assets/woman.png';
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";


export function Sidebar() {
    return (
        <>
            <div >
                <Row>
                    <Col sm={3} className="sidebarbg position-fixed">
                        <h1 className="sbTitles">@CoLe</h1>
                        <img src={woman}
                            height="150em"
                            width="150em"
                            alt="name"></img><br />
                        <Button variant="secondary" className="m-2" size="sm">Mentor</Button>
                        <Button variant="primary" className="m-2" size="sm">Trader</Button>
                        <h4 className="sbTitles">New York University</h4>
                        <p>Biology Major</p>
                        <p className="bio mx-3">Hi I'm Stacey Hirano, a violin player and a platypus enthusiast. Catch me downing 3 cups of coffee at 3AM trying to finish a report. Or not because you're probably sleeping like a reasonable person.</p>
                        <a href="https://www.facebook.com/"><FaFacebook className="sbIcons mr-2" /></a>
                        <a href="https://www.github.com/"><FaGithub className="sbIcons mr-2" /></a>
                        <a href="https://www.linkedin.com/"><FaLinkedinIn className="sbIcons mr-2" /></a>
                    </Col>
                </Row>
            </div>
        </>
    )
}