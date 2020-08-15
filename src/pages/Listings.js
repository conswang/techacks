import React from "react";
import { Note } from "../components/Note";
import { mockNote } from "../mockData.js";
import { Navigation } from "../components/Navbar";

export function Listings() {

    return (
        <>
            <Navigation />
            <Note note={mockNote} />
        </>
    )

} 