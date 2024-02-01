import useInput from "../../../hooks/useInput";
import Button from "../../UI/Button";
import Input from '../../UI/Input';
import './DestinationInquiryForm.css';

export default function InquiryForm() {
    const successMsg = "Form submitted successfully.";
    const {formRef, handleSubmit, dialogBox} = useInput({successMsg});

    return (
        <>
            {dialogBox}
            <form ref={formRef} onSubmit={handleSubmit}>
                <Input type="text" name='name' placeholder="Your Name" />
                <Input type="email" name='email' placeholder="Your Email" />
                <Input type="text" name='subject' placeholder="Subject" />
                <Input type="text" name='message' rows="3" placeholder="Message" textarea />
                <Button type="submit" name='name' className="submitButton" children="Submit" />
            </form>
        </>
    );
}
