import React from 'react';
import './Sidebar.scss';
import { Row, Col } from "react-bootstrap";
import woman from '../assets/woman.png';

export function Sidebar() {
    return (
        <>
            <div >
                <Row>
                    <Col sm={3} className="sidebarbg">
                        <h1>Username</h1>
                        <img src={woman}
                            height="200em"
                            width="200em"
                            alt="name"></img>
                    </Col>
                </Row>
            </div>
        </>
    )
}