import React from 'react';
import useInput from '../../../hooks/useInput.jsx';
import Button from "../../UI/Button.jsx";
import Input from '../../UI/Input.jsx';
import './ContactForm.css';

export default function ContactForm() {
    const successMsg = "Form submitted successfully.";
    const {formRef, handleSubmit, dialogBox} = useInput({successMsg});

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
                    </form>
                </div>
            </div>
        </>
    );
}