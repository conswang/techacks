import React from 'react';
import { Row, Col } from 'react-bootstrap';
import weblanding from '../assets/weblanding.svg';
import down from '../assets/down.png';
import "./Landing.scss"
import { Link, animateScroll as scroll } from "react-scroll";

export function LandingPage() {
    return (
        <>
            <div className="landing">
                <Row className="text-center align-items-center">
                    <Col sm={5}>
                        <h1 className="landingTitle">Welcome to CoLab.</h1>
                    </Col>
                    <Col sm={7} className="text-center">
                        <img src={weblanding}
                            alt="Colab"
                            height="450em"
                            width="450em"></img>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Link
                        activeClass="active"
                        to="sectionTwo"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    ><img src={down}
                        height="80em"
                        width="80em"></img></Link>
                </Row>
            </div>
        </>
    )
}