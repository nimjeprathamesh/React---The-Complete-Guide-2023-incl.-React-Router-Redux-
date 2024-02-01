import { useContext } from "react";
import useHttp from "../../../hooks/useHttp.jsx";
import useInput from "../../../hooks/useInput.jsx";
import DataContext from "../../../store/dataContext.jsx";
import Button from "../../UI/Button.jsx";
import Error from "../../UI/Error.jsx";
import Input from '../../UI/Input.jsx';
import './ContactForm.css';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function ContactForm() {
    const dataCtx = useContext(DataContext);
    const successMsg = "Form submitted successfully.";
    const {formRef, setIsModalOpen, dialogBox} = useInput({successMsg});
    const {isLoading, error, sendRequest} = useHttp(
        'http://localhost:3000/contactInfo',
        requestConfig
    );

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        console.log(customerData);

        sendRequest(JSON.stringify({
            order: {
                id: dataCtx.items[0]?.id || Math.random().toString(),
                name: customerData.name,
                email: customerData.email,
                subject: customerData.subject,
                message: customerData.message
            }
        }));

        setIsModalOpen(true);

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <>
            {dialogBox}
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12">
                <div className="contact-area">
                    <h1>Enquiry Now</h1>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <Input type="text" name='name' className="input" placeholder="&#xf007;  Name" />
                        <Input type="email" name='email' className="input" placeholder="&#xf0e0;  Email Address *" />
                        <Input type="text" name='subject' className="input" placeholder="&#xf05a;  Subject" />
                        <Input
                            type="text"
                            name='message'
                            className="textarea"
                            placeholder="&#xf27a;  Write A Message"
                            textarea
                        />
                        <Button type='submit' className="submitButton" children="&#xf2f6; SUBMIT NOW" />
                        {isLoading && (<p className="center">Sending data...</p>)}
                        {error && <Error message='Failed to fetch contactInfo.' />}
                    </form>
                </div>
            </div>
        </>
    );
}