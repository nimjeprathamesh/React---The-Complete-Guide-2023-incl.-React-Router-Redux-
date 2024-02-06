import React, { useContext, useEffect } from "react";
import useHttp from "../../../hooks/useHttp.jsx";
import useInput from '../../../hooks/useInput.jsx';
import DataContext from "../../../store/dataContext.jsx";
import Button from '../../UI/Button';
import Error from "../../UI/Error/Error.jsx";
import Input from '../../UI/Input';
import './SubscribeForm.css';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function SubscribeForm() {
    const dataCtx = useContext(DataContext);
    const successMsg = 'You subscribed our website.';
    const {formRef, setIsModalOpen, dialogBox} = useInput({successMsg});
    const {isLoading, error, sendRequest, success: requestSuccess} = useHttp(
        'http://localhost:3000/subscription',
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
                email: customerData.email,
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
            <div className="subscribe">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12">
                            <Input name='email' type="email" placeholder="Enter your email" />
                            {isLoading && (<p className="center">Sending data...</p>)}
                            {error && <Error message='Failed to fetch subscription.' />}
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