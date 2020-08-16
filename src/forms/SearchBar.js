import React from "react";
import { FormControl, InputGroup, Row, Col, Button } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";
import './SearchBar.scss'

export function SearchBar() {
    return (
        <>
            <div>
                <Row className="justify-content-md-center my-3">
                    <Col sm={7}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="secondary"><BsSearch /></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <h3>Top Courses:</h3>
                    <Button className="filters" variant="secondary">Computer Science</Button>
                    <Button className="filters" variant="secondary">Calculus</Button>
                    <Button className="filters" variant="secondary">Biology</Button>
                    <Button className="filters" variant="secondary">Humanities</Button>
                </Row>
            </div>
        </>
    );
}