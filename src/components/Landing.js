import React from 'react';
import { Row, Col } from 'react-bootstrap';
import weblanding from '../assets/weblanding.svg';
import down from '../assets/down.png';
import "./Landing.scss"

export function LandingPage() {
    return (
        <>
            <div className="landing">
                <Row className="align-items-center">
                    <Col sm={5}>
                        <h1 className="display-2">Welcome to CoLab.</h1>
                    </Col>
                    <Col sm={7} className="text-center">
                        <img src={weblanding}
                            alt="Colab"
                            height="450em"
                            width="450em"></img>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <img src={down}
                        height="80em"
                        width="80em"></img>
                </Row>
            </div>
        </>
    )
}