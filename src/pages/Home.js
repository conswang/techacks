import React from "react";
import { Row, Col } from 'react-bootstrap';
import { UserInfo } from "../forms/UserInfo.js";
import { LandingPage } from "../components/Landing";
import { Navigation } from "../components/Navbar";
import { AboutSec } from "../components/AboutSec"


export function Home() {

    return (
        <>

            <LandingPage />
            <Navigation />
            <div id="sectionTwo">
                <AboutSec />
            </div>
            <UserInfo />
        </>
    )

} 