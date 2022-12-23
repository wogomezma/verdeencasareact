import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

export const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            <Navbar />
            <section>{children}</section>
            <Footer/>
        </main>
    );
};

