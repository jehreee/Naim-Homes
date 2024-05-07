import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";

export default function Root() {
    return (
        <div>
            <Nav />
            <Home />
            <About />
            <Contact />
            <Footer />
        </div>
        

    );
}