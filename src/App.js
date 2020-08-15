import React, { Component, useState } from "react";
import { NoteListingForm } from "./forms/NoteListingForm";
import { BookListingForm } from "./forms/BookListingForm";
import { Note } from "./components/Note";
import { mockNote } from "./mockData.js";
import { UserInfo } from "./forms/UserInfo";
import UserProvider from "./providers/UserProvider";
import axios from "axios";

class App extends Component {
  state = {
    notes: null,
  };
  componentDidMount() {
    axios
      .get("/get5Notes")
      .then((res) => {
        this.setState({
          notes: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let notesloaded = this.state.notes ? (
      this.state.notes.map((notes) => <Note note={notes} />)
    ) : (
      <p>Getting Notes... </p>
    );
    return (
      <UserProvider>
        <NoteListingForm></NoteListingForm>
        <BookListingForm></BookListingForm>
        <UserInfo></UserInfo>
        <Note note={mockNote}></Note>
        {notesloaded}
      </UserProvider>
    );
  }
}

export default App;
