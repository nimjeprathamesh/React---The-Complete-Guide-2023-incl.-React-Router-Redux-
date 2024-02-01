import React from "react";
import useInput from "../../../hooks/useInput.jsx";
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import './SubscribeForm.css';

export default function SubscribeForm() {
    const successMsg = "You subscribed our website.";
    const {formRef, handleSubmit, dialogBox} = useInput({successMsg});

    return (
        <>
            {dialogBox}
            <div className="subscribe">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12">
                            <Input name='email' type="email" placeholder="Enter your email" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
                            <Button type='submit' className="subscribeButton" children="SUBSCRIBE" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}