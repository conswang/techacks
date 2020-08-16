import React from "react";
import { Navigation } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Note } from "../components/Note.js";
import { mockNote } from "../mockData.js";
import { ProfilePosts } from "../components/ProfilePosts.js";
import { Row, Col } from "react-bootstrap";

export function Profiles() {

    return (
        <>
            <Navigation />
            <Sidebar />
            <ProfilePosts />
        </>
    )

} 