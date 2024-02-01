import React, { useContext, useEffect } from 'react';
import useHttp from '../../../hooks/useHttp.jsx';
import useInput from '../../../hooks/useInput.jsx';
import DataContext from '../../../store/dataContext.jsx';
import Button from '../../UI/Button';
import Error from '../../UI/Error.jsx';
import Input from '../../UI/Input';
import './ContactUs.css';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function ContactUs() {
    const dataCtx = useContext(DataContext);
    const successMsg = "Form submitted successfully.";
    const {formRef, setIsModalOpen, dialogBox} = useInput({successMsg});
    const {isLoading, error, sendRequest, success: requestSuccess} = useHttp(
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

    useEffect(() => {
        if (!isLoading && !error && requestSuccess) {
            setIsModalOpen(true);
        }
    }, [isLoading, error, requestSuccess, setIsModalOpen]);

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
                        {isLoading && (<p className="center">Sending data...</p>)}
                        {error && <Error message='Failed to fetch contactInfo.' />}
                    </form>
                </div>
            </div>
        </>
    );
}
