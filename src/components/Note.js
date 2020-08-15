import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Note.scss'

export function Note(props) {
  const [showPreview, setShowPreview] = React.useState(false);

  const ask = props.note.ask;
  const price = props.note.price;
  let askText = `${ask || ''}${ask && price ? ' or ' : ''}${price + ' USD' || ''}`;
  return (
    <>
      {/* Enlarged image preview */}
      <Modal show={showPreview} size='lg' onHide={() => setShowPreview(false)}>
        <Modal.Header closeButton>
          <Modal.Title>One Page Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.note.image} alt={props.note.title} class='note-image-preview'></img>
        </Modal.Body>
      </Modal>

      <Card className='note'>
        <Card.Img className='note-image' src={props.note.image} onClick={() => setShowPreview(true)}></Card.Img>
        <Card.Body>
          <Card.Title className='note-title'>{props.note.title}</Card.Title>
          <Card.Text>
            <div className='note-ask'>Ask: {askText}</div>
            <div className='note-paragraph'>{props.note.description}</div>
            <div className='note-actions'>
              {
                props.note.ask
                  ? <Button>Exchange</Button>
                  : undefined
              }
              {
                props.note.price
                  ? <Button>Purchase</Button>
                  : undefined
              }
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}