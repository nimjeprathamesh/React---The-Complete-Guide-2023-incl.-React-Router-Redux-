import './ContactUs.css';
import ContactUsHeader from './ContactUsHeader/ContactUsHeader.jsx';
import ContactForm from './InnerArea/ContactForm.jsx';
import ContactInfo from './InnerArea/ContactInfo.jsx';

export default function ContactUs() {
    return (
        <>
            <ContactUsHeader />
            <section id="contact_page">
                <div className="row inner-area">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </section>
        </>
    );
}