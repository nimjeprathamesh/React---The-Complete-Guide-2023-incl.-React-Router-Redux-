import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, Textarea, useColorModeValue } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { Form, useLocation } from 'react-router-dom';
import DestinationHeading from './DestinationHeading';

export default function DestinationForm({ destination, method }) {
    const formBg = useColorModeValue('white', 'gray.700');
    const dateInputRef = useRef(null);
    const location = useLocation();
    const isAddPath = location.pathname === '/admin/destination/add';
    const icon = isAddPath ? FiPlusCircle : FiEdit;
    const heading = isAddPath ? 'Add Destination' : 'Update Destination';

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <Box id="addUpdate" display='contents'>
            <DestinationHeading />
            <Flex className='form' justifyContent='center'>
                <Box mt={2} bg={formBg} rounded="md" width='50%'>
                    <Form method={method} encType="multipart/form-data">
                        <Flex display="flex" flexDirection="column" gap={4}>
                            <FormControl id="date">
                                <FormLabel>Date:</FormLabel>
                                <Input
                                    ref={dateInputRef}
                                    name="date"
                                    type="date"
                                    defaultValue={destination ? formatDate(destination.Date) : ''}
                                    className="form-control addUpdatefield"
                                    onFocus={() => dateInputRef.current.showPicker()}
                                />
                            </FormControl>
                            <FormControl id="name">
                                <FormLabel>Name:</FormLabel>
                                <Input
                                    name="name"
                                    type="text"
                                    placeholder="Enter place name"
                                    defaultValue={destination ? destination.Name : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id="duration">
                                <FormLabel>Duration:</FormLabel>
                                <Input
                                    name="duration"
                                    type="text"
                                    placeholder="Enter duration"
                                    defaultValue={destination ? destination.Duration : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id="details">
                                <FormLabel>Details:</FormLabel>
                                <Textarea
                                    name="details"
                                    placeholder="Enter destination details"
                                    defaultValue={destination ? destination.Details : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id="image">
                                <FormLabel>Tour Image:</FormLabel>
                                <Input
                                    name="image"
                                    type="url"
                                    defaultValue={destination ? destination.Image : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <Button type="submit" colorScheme='green' leftIcon={<Icon as={icon} />}>
                                {heading}
                            </Button>
                        </Flex>
                    </Form>
                </Box>
            </Flex>
        </Box>
    );
}