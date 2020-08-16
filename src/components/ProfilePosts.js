import React from "react";
import { Note } from "../components/Note.js";
import { mockNote } from "../mockData.js";
import { Card, Accordion, Button, Row, Col } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-icons/bs";


export function ProfilePosts() {

    return (
        <>
            <Row>
                <Col sm={{ span: 9, offset: 3 }}>
                    <h1 className="sbTitles text-center">Available Course Materials</h1>
                    <Accordion >
                        <Card className="border-0" >
                            <Card.Header >
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <h4><BsFillCaretDownFill /> Lecture Notes</h4>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><Note note={mockNote} /></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="border-0">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" >
                                    <h4><BsFillCaretDownFill /> Classes for Mentorship</h4>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Button variant="success" className="mr-3">BIO 101</Button>
                                    <Button variant="success" className="mr-3">PSY 101</Button>
                                    <Button variant="success" className="mr-3">MTH 227</Button>
                                    <Button variant="success" className="mr-3">ART 112</Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row >
        </>
    )

} 