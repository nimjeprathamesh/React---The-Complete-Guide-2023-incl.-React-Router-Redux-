import React from 'react';
import useInput from '../../../hooks/useInput.jsx';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import './ContactUs.css';

export default function ContactUs() {
    const successMsg = "Form submitted successfully.";
    const {formRef, handleSubmit, dialogBox} = useInput({successMsg});

    return (
        <>
            {dialogBox}
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
                <div className='contact-area'>
                    <h1><span>Get </span>in touch!</h1>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <Input name='name' type='text' placeholder='&#xf007;  Name' />
                        <Input name='email' type='email' placeholder='&#xf0e0;  Email Address' />
                        <Input name='subject' type='text' placeholder='&#xf05a;  Subject' />
                        <Input name='message' type='text' rows='5' placeholder='&#xf27a;  Write A Message' textarea />
                        <Button type='submit' className="submitButton">
                            <span>&#xf2f6;</span>SUBMIT NOW
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
