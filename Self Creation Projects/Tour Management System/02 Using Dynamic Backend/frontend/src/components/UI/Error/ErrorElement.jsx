import Footer from "../../Common/Footer/Footer.jsx";
import Header from "../../Common/Header/Header.jsx";

export default function ErrorElement() {
    return (
        <section id='error'>
            <Header />
            <main>
                <h2>An error occurred!</h2>
                <p>Could not find this page!</p>
            </main>
            <Footer />
        </section>
    );
}
