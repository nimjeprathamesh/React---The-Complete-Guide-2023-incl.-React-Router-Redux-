import { useTheme } from "../../hooks/useTheme.jsx";
import Footer from "../Common/Footer/Footer.jsx";
import Header from "../Common/Header/Header.jsx";

export default function Error() {
    const {themeCss} = useTheme();

    return (
        <section id="error" style={themeCss}>
            <Header />
            <main>
                <h1>An error occurred!</h1>
                <p>Could not find this page!</p>
            </main>
            <Footer />
        </section>
    );
}