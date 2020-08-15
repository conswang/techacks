import React from 'react';
import { Form, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NoteListingForm.scss'

export function NoteListingForm() {
  return (
    <Card className='noteListing'>
      <Card.Title>Upload Note</Card.Title>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Note Title" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" />
          </Form.Group>
          <Form.Group as={Col} controlId="formCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control type="text" placeholder="Enter Cource" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3"></Form.Control>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formAsk">
            <Form.Label>Ask</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject Note" />
          </Form.Group>
          <Form.Group as={Col} controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price (USD)" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.File label="Upload file" />
        </Form.Group>

        <Button>Submit</Button>
      </Form>
    </Card>

  )
}