import React from 'react';
import Button from 'react-bootstrap/Button';
import { NoteListingForm } from './forms/NoteListingForm';
import { BookListingForm } from './forms/BookListingForm';

function App() {
  return (
    <>
      <NoteListingForm></NoteListingForm>
      <BookListingForm></BookListingForm>
    </>
  );
}

export default App;
