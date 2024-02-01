import React from 'react';
import useInput from '../../../hooks/useInput.jsx';
import Button from "../../UI/Button";
import Input from '../../UI/Input';
import './PackageInquiryForm.css';

export default function InquiryForm() {
    const successMsg = "Form submitted successfully.";
    const {formRef, handleSubmit, dialogBox,} = useInput({successMsg});

    return (
        <>
            {dialogBox}
            <div className="row">
                <h6>INQUIRY FORM</h6>
                <hr className="hr-1" />
                <hr className="hr-2" />
                <form ref={formRef} onSubmit={handleSubmit}>
                    <Input type="text" name='name' placeholder="Your Name" />
                    <Input type="email" name='email' placeholder="Your Email" />
                    <Input type="text" name='subject' placeholder="Subject" />
                    <Input type="text" name='message' rows="3" placeholder="Message" textarea />
                    <Button type='submit' className="submitButton" children="Submit" />
                </form>
            </div>
        </>
    );
}