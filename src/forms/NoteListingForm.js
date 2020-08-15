import React from 'react';
import { Form, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
// import { api } from 'functions/src/index.ts';

export function NoteListingForm() {
  const [title, setTitle] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [ask, setAsk] = React.useState('');
  const [price, setPrice] = React.useState();

  const onSubmit = () => {
    
  }

  return(
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={e => setTitle(e.target.value)}></Form.Control>
      </Form.Group>

      <Row>
        <Form.Group as={Col}>
          <Form.Label>Subject</Form.Label>
          <Form.Control onChange={e => setSubject(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Course</Form.Label>
          <Form.Control onChange={e => setCourse(e.target.value)}></Form.Control>
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" onChange={e => setDescription(e.target.value)}></Form.Control>
      </Form.Group>

      <Row>
        <Form.Group as={Col}>
          <Form.Label>Ask</Form.Label>
          <Form.Control onChange={e => setAsk(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Price</Form.Label>
          <Form.Control onChange={e => setPrice(e.target.value)}></Form.Control>
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.File label="Upload one page preview"/>
      </Form.Group>

      <Button onClick={onSubmit}>Submit</Button>
    </Form>
  )
}