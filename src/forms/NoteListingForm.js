import React from 'react';
import { Form, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NoteListingForm.scss'
import Axios from 'axios'
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

  return (
    <Card className='noteListing'>
      <Card.Title>Upload Note</Card.Title>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Note Title"  onChange={e => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject"  onChange={e => setSubject(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control type="text" placeholder="Enter Course"  onChange={e => setCourse(e.target.value)}/>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={e => setDescription(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formAsk">
            <Form.Label>Ask</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject Note" onChange={e => setAsk(e.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price (USD)" onChange={e => setPrice(e.target.value)}/>
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.File label="Upload file" />
        </Form.Group>

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </Card>

  )
}