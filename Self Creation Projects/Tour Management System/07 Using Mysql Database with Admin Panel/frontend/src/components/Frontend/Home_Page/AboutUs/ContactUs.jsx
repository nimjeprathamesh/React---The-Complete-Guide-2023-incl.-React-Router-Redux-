import { Box, Button, FormControl, FormLabel, Heading, Icon, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Form } from 'react-router-dom';
import './ContactUs.css';

export default function ContactUs() {
    return (
        <Box className='contact-area' p={4}>
            <Heading as='h1' size='xl' mb={6}><Text as='span'>Get </Text>in touch!</Heading>
            <Form method='post'>
                <FormControl id='name' mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input name='name' type='text' placeholder='Name' />
                </FormControl>
                <FormControl id='email' mb={4}>
                    <FormLabel>Email Address</FormLabel>
                    <Input name='email' type='email' placeholder='Email Address' />
                </FormControl>
                <FormControl id='subject' mb={4}>
                    <FormLabel>Subject</FormLabel>
                    <Input name='subject' type='text' placeholder='Subject' />
                </FormControl>
                <FormControl id='message' mb={4}>
                    <FormLabel>Write A Message</FormLabel>
                    <Textarea name='message' placeholder='Write A Message' rows={3} />
                </FormControl>
                <Button type='submit' className='submitButton' leftIcon={<Icon as={FiArrowRightCircle} />}>
                    SUBMIT NOW
                </Button>
            </Form>
        </Box>
    );
}