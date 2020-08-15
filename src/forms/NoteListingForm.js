import React from 'react';
import { Form, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export function NoteListingForm() {
  return(
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Subject</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Course</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3"></Form.Control>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Ask</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Price</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.File label="Upload one page preview"/>
      </Form.Group>

      <Button>Submit</Button>
    </Form>
  )
}