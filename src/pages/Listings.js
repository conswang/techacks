import React from "react";
import { Note } from "../components/Note";
import { mockNote } from "../mockData.js";
import { Navigation } from "../components/Navbar";
import { NoteListingForm } from "../forms/NoteListingForm";
import { SearchBar } from "../forms/SearchBar"
import { Button } from 'react-bootstrap'

export function Listings() {

    return (
        <React.Fragment >
            <Navigation />
            <h1 className="display-4 text-center">Search Course Material</h1>
            <SearchBar className="mt-3" />
            <Note note={mockNote} />
            <Note note={mockNote} />
            <Note note={mockNote} />
            <Note note={mockNote} />
            <h1 className="display-4 text-center">Help a fellow student today!</h1>
            <NoteListingForm />
        </React.Fragment>
    )

} 