import { Box, Button, FormControl, Heading, Icon, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Form } from "react-router-dom";
import useInput from '../../../hooks/useInput.jsx';
import './ContactForm.css';

export default function ContactForm() {
    const successMsg = "Form submitted successfully.";
    const {formRef, handleSubmit, dialogBox} = useInput({successMsg});

    return (
        <Box>
            {dialogBox}
            <Box className="contact-area">
                <Heading as='h1'>Enquiry Now</Heading>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <FormControl mb={4}>
                        <Input type="text" name="name" className="input" placeholder="&#xf007;  Name" />
                    </FormControl>
                    <FormControl mb={4} isRequired>
                        <Input type="email" name="email" className="input"  placeholder="&#xf0e0;  Email Address *" />
                    </FormControl>
                    <FormControl mb={4}>
                        <Input type="text" name="subject" className="input"  placeholder="&#xf05a;  Subject" />
                    </FormControl>
                    <FormControl mb={4}>
                        <Textarea name="message" className="textarea"  placeholder="&#xf27a;  Write A Message" />
                    </FormControl>
                    <Button
                        type="submit"
                        className="submitButton"
                        leftIcon={<Icon as={FiArrowRightCircle} />}
                    >
                        SUBMIT NOW
                    </Button>
                </Form>
            </Box>
        </Box>
    );
}