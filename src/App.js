import React from 'react';
import { NoteListingForm } from './forms/NoteListingForm';
import { BookListingForm } from './forms/BookListingForm';
import { UserInfo } from './forms/UserInfo';

function App() {
  return (
    <>
      <NoteListingForm></NoteListingForm>
      <BookListingForm></BookListingForm>
      <UserInfo></UserInfo>
    </>
  );
}

export default App;
