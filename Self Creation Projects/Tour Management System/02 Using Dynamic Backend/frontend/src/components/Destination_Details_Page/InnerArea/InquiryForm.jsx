import { useContext, useEffect } from "react";
import useHttp from "../../../hooks/useHttp.jsx";
import useInput from "../../../hooks/useInput.jsx";
import DataContext from "../../../store/dataContext.jsx";
import Button from "../../UI/Button.jsx";
import Error from "../../UI/Error.jsx";
import Input from '../../UI/Input.jsx';
import './DestinationInquiryForm.css';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function InquiryForm() {
    const dataCtx = useContext(DataContext);
    const successMsg = "Form submitted successfully.";
    const {formRef, setIsModalOpen, dialogBox} = useInput({successMsg});
    const {isLoading, error, sendRequest, success: requestSuccess} = useHttp(
        'http://localhost:3000/contactInfo',
        requestConfig, []
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
            <form ref={formRef} onSubmit={handleSubmit}>
                <Input type="text" name='name' placeholder="Your Name" required />
                <Input type="email" name='email' placeholder="Your Email" required />
                <Input type="text" name='subject' placeholder="Subject" required />
                <Input type="text" name='message' rows="3" placeholder="Message" textarea required />
                <Button type="submit" className="submitButton" children="Submit" />
                {isLoading && (<p className="center">Sending data...</p>)}
                {error && <Error message='Failed to fetch contactInfo.' />}
            </form>
        </>
    );
}
