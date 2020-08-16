import React from "react";
import { UserInfo } from "../forms/UserInfo.js";
import { LandingPage } from "../components/Landing";
import { Navigation } from "../components/Navbar";


export function Home() {

    return (
        <>

            <LandingPage />
            <Navigation />
            <div id="sectionTwo">
                <UserInfo />
            </div>
        </>
    )

} 