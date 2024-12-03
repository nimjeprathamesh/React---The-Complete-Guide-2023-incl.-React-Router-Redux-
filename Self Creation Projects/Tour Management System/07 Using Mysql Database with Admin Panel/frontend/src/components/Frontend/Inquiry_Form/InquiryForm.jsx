import { Box, Button, Divider, FormControl, Heading, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { Form, redirect } from "react-router-dom";
import { useTheme } from '../../../hooks/useTheme.jsx';
import { BACKEND_URL } from "../../../util/constant.jsx";
import './DestinationInquiryForm.css';

export default function InquiryForm() {
    const {isDark} = useTheme();
    const buttonHoverClass = isDark ? 'submitButtonLight' : 'submitButtonDark';
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';

    return (
        <Box>
            <Heading fontSize='1rem'>INQUIRY FORM</Heading>
            <Divider className="hr-1" />
            <Divider className={`hr-2 ${borderColor}`} />
            <Form method="post" className={borderColor}>
                <FormControl id="name" mb={4}>
                    <Input type="text" name='name' placeholder="Your Name" />
                </FormControl>
                <FormControl id="email" mb={4}>
                    <Input type="email" name='email' placeholder="Your Email" />
                </FormControl>
                <FormControl id="subject" mb={4}>
                    <Input type="text" name='subject' placeholder="Subject" />
                </FormControl>
                <FormControl id="message" mb={4}>
                    <Textarea
                        name='message'
                        placeholder="Message"
                        rows="3"
                    />
                </FormControl>
                <Button type='submit' className={`submitButton ${buttonHoverClass}`}>
                    Submit
                </Button>
            </Form>
        </Box>
    );
}

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    console.log(postData);

    await fetch(BACKEND_URL + 'api/contactinfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(result => {
        console.log('Success:', result);
    })

    return redirect('/');
};