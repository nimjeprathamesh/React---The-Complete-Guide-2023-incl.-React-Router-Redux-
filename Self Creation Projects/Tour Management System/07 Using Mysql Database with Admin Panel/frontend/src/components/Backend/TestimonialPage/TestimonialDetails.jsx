import { Box, CardBody, Flex, Heading, Img, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Modal from '../../UI/Modal.jsx';
import TestimonialAction from './TestimonialAction.jsx';
import './TestimonialPage.css';

export default function TestimonialDetails({testimonial, onDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleConfirmDelete() {
        onDelete(testimonial.id);
        onClose();
    };

    const deleteDialogBox = (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            children='testimonial'
            onConfirm={handleConfirmDelete}
        />
    );

    return (
        <Box>
            {deleteDialogBox}
            <CardBody p={0}>
                <Flex justifyContent="space-between" gap={5}>
                    <Img
                        src={testimonial.Image}
                        className='tsImg'
                        borderRadius='lg'
                        height='10rem'
                        width='10rem'
                        transition= 'all 0.5s linear'
                    />
                    <Flex direction='column' justifyContent="space-between" gap={10}>
                        <Text>{testimonial.Feedback}</Text>
                        <Flex justifyContent="space-between">
                            <Flex justifyContent="space-between" gap={5}>
                                <Img
                                    src={require("../../../images/photo.jpg")}
                                    className="ts-img-2"
                                    alt='testimonial'
                                />
                                <Heading size='xs'>{testimonial.Name}</Heading>
                            </Flex>
                            <Heading size='xs' mr={5}>{testimonial.Designation}</Heading>
                        </Flex>
                    </Flex>
                </Flex>
            </CardBody>
            <TestimonialAction testimonial={testimonial} onOpen={onOpen} />
        </Box>
    );
}