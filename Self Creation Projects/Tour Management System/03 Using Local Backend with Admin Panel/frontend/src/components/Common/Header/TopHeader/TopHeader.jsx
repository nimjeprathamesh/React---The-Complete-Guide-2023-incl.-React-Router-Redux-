import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useTheme } from '../../../../hooks/useTheme.jsx';
import './TopHeader.css';

export default function TopHeader() {
    const {isDark} = useTheme();
    const buttonHoverClass = isDark ? 'header-btn-dark' : 'header-btn-light';

    return (
        <Box id="top-header" margin='0 9rem'>
            <Flex justifyContent='space-between'>
                <Flex direction='row' mt={2}>
                    <Text>
                        We are a experience company.
                        <Text as='span' ml={2} color='#f41844'>Contact Us!</Text>
                    </Text>
                </Flex>
                <Text mt={2}>
                    <Icon as={TfiEmail} color='unset' /> <Link href="mailto:clinexmex0011@gmail.com" className='mailNum'>
                        clinexmex0011@gmail.com
                    </Link>
                </Text>
                <Text mt={2}>
                    <Icon as={FiPhone} /> <Text as='span'  className='mailNum'>(+00) 555 666 999 00</Text>
                </Text>
                <Link to='/contactUs'>
                    <Button
                        padding='1.5rem'
                        fontWeight='bold'
                        className={`header-btn ${buttonHoverClass}`}
                    >
                        BOOK NOW
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}