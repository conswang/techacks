import React from "react";
import { UserInfo } from "../forms/UserInfo.js";
import { BookListingForm } from "../forms/BookListingForm";
import { Navigation } from "../components/Navbar";

export function Home() {

    return (
        <>
            <Navigation />
            <UserInfo />
        </>
    )

} 