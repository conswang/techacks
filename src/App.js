import React from 'react';
import { NoteListingForm } from './forms/NoteListingForm';
import { BookListingForm } from './forms/BookListingForm';
import { Note } from './components/Note'
import { mockNote } from './mockData.js'
import { UserInfo } from './forms/UserInfo'

function App() {
  return (
    <>
      <NoteListingForm></NoteListingForm>
      <BookListingForm></BookListingForm>
      <UserInfo></UserInfo>
      <Note note={mockNote}></Note>
    </>
  );
}

export default App;
