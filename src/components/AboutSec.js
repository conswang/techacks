import React from 'react';
import { Row, Col } from 'react-bootstrap';
import sharing from "../assets/sharing.svg";
import "./Landing.scss"
import { Link, animateScroll as scroll } from "react-scroll";

export function AboutSec() {
    return (
        <>
            <div className="landing">
                <Row className="align-items-center">
                    <Col sm={7} className="text-center">
                        <img src={sharing}
                            alt="Share"
                            height="450em"
                            width="450em"></img>
                    </Col>
                    <Col sm={5}>
                        <h1 className="aboutTitle">What is CoLab?</h1>
                        <p>It is a platform to trade or sell old course material with upcoming students. </p>
                    </Col>

                </Row>
            </div>
        </>
    )
}