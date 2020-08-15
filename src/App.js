import React from 'react';
import { NoteListingForm } from './forms/NoteListingForm';
import { BookListingForm } from './forms/BookListingForm';
import { Note } from './components/Note'
import { mockNote } from './mockData.js'
import { UserInfo } from './forms/UserInfo'
import UserProvider from './providers/UserProvider'

function App() {
  return (
    <UserProvider>
      <NoteListingForm></NoteListingForm>
      <BookListingForm></BookListingForm>
      <UserInfo></UserInfo>
      <Note note={mockNote}></Note>
    </UserProvider>
  );
}

export default App;
