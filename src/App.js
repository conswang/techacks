import React from 'react';
import Button from 'react-bootstrap/Button';
import { NoteListingForm } from './forms/NoteListingForm';
import { BookListingForm } from './forms/BookListingForm';
import { Note } from './components/Note'
import { mockNote } from './mockData.js'

function App() {
  return (
    <>
      <NoteListingForm></NoteListingForm>
      <Note note={ mockNote }></Note>
    </>
  );
}

export default App;
