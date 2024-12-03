import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, Textarea, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { Form, useLocation } from 'react-router-dom';
import '../../addUpdateFile.css';
import TestimonialHeading from './TestimonialHeading.jsx';

export default function TestimonialForm({testimonial, method}) {
    const formBg = useColorModeValue('white', 'gray.700');
    const location = useLocation();
    const isAddPath = location.pathname === '/admin/testimonial/add';
    const icon = isAddPath ? FiPlusCircle : FiEdit;
    const heading = isAddPath ? 'Add Testimonial' : 'Update Testimonial';

    return (
        <Box id="addUpdate" w='full'>
            <TestimonialHeading />
            <Flex className='form' justifyContent='center'>
                <Box
                    mt={2}
                    bg={formBg}
                    shadow='0 0px 5px 0 rgba(0, 0, 0, 0.2), 0 0px 18px 0 rgba(0, 0, 0, 0.19)'
                    width='50rem'
                    rounded="md"
                >
                    <Form method={method}>
                        <Box display="flex" flexDirection="column" gap={4}>
                            <FormControl id="name">
                                <FormLabel>Name</FormLabel>
                                <Input
                                    name='name'
                                    type="text"
                                    defaultValue={testimonial ? testimonial.Name : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id="designation">
                                <FormLabel>Designation</FormLabel>
                                <Input
                                    name='designation'
                                    type="text"
                                    defaultValue={testimonial ? testimonial.Designation : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id="image">
                                <FormLabel>Image</FormLabel>
                                <Input
                                    name='image'
                                    type="url"
                                    defaultValue={testimonial ? testimonial.Image : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id="feedback">
                                <FormLabel>Feedback</FormLabel>
                                <Textarea
                                    name='feedback'
                                    defaultValue={testimonial ? testimonial.Feedback : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <Button
                                type='submit'
                                colorScheme='green'
                                variant="solid"
                                leftIcon={<Icon as={icon} />}
                            >
                                {heading}
                            </Button>
                        </Box>
                    </Form>
                </Box>
            </Flex>
        </Box>
    );
}