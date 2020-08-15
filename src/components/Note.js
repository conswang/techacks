import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Note.scss'

export function Note(props) {
  const ask = props.note.ask;
  const price = props.note.price;
  let askText = `${ask || ''}${ask && price ? ' or ' : ''}${price + ' USD' || ''}`;
  return(
    <Card className='note'>
      <Card.Img className='note-image' src="https://images-na.ssl-images-amazon.com/images/I/81nia28xsOL._AC_SL1500_.jpg"></Card.Img>
      <Card.Body>
        <Card.Title className='note-title'>{props.note.title}</Card.Title>
        <Card.Text>
          <p className='note-ask'>Ask: {askText}</p>
          <p>{props.note.description}</p>
          <div className='note-actions'>
            {
              props.note.ask
              ?<Button>Exchange</Button>
              : undefined
            }
            {
              props.note.price
              ?<Button>Purchase</Button>
              : undefined
            }
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}