import React from 'react';
import { Form, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { serverURI } from '../constants'

export function NoteListingForm() {
  const [title, setTitle] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [ask, setAsk] = React.useState('');
  const [price, setPrice] = React.useState();

  const onSubmit = () => {
    Axios.post(`${serverURI}/createNotes`, {
      title: title,
      subject: subject,
      course: course,
      description: description,
      ask: ask,
      price: price,
      pageNum: 100,
    })
    .then(() => console.log('success'))
    .catch((err) => console.log(err))
  }

  const validateCurrency = (amount) => {
    const regex = /^[1-9]\d*(?:\.\d{0,2})?$/;
    return regex.test(amount);
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
          <Form.Label>Price (USD)</Form.Label>
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