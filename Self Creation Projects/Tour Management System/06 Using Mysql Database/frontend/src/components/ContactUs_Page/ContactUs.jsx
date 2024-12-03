import { Box, Flex } from '@chakra-ui/react';
import { useTheme } from '../../hooks/useTheme.jsx';
import './ContactUs.css';
import ContactUsHeader from './ContactUsHeader/ContactUsHeader.jsx';
import ContactForm from './InnerArea/ContactForm.jsx';
import ContactInfo from './InnerArea/ContactInfo.jsx';

export default function ContactUs() {
    const {themeCss} = useTheme();

    return (
        <Box>
            <ContactUsHeader />
            <Box id="contact_page">
                <Flex wrap='wrap' justifyContent='space-between' className="row inner-area" style={themeCss}>
                    <Box flex="1" minWidth="300px" maxWidth="55%">
                        <ContactForm />
                    </Box>
                    <Box flex="1" minWidth="300px" maxWidth="45%">
                        <ContactInfo />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}