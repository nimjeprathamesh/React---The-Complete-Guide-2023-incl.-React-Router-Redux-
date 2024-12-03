import React from "react";
import useTheme from "../../../hooks/useTheme.jsx";
import Footer from "../../Frontend/Common/Footer/Footer.jsx";
import Header from "../../Frontend/Common/Header/Header.jsx";

export default function ErrorElement() {
    const {themeCss} = useTheme();

    return (
        <section id='error' style={themeCss}>
            <Header />
            <main>
                <h2>An error occurred!</h2>
                <p>Could not find this page!</p>
            </main>
            <Footer />
        </section>
    );
}
