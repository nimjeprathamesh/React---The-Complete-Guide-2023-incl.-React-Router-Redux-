import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import './ContactInfo.css';

export default function ContactInfo() {
    return (
        <Box>
            <Box className="contact-info">
                <Box className="contact-details">
                    <Flex className="contact-label" alignItems="center">
                        <Text as='i'><Icon as={EmailIcon} /></Text>
                        <Text as='span' ml={2}>
                            EMAIL US
                            <Link href="mailto:clinexmex0011@gmail.com" ml={2}>clinexmex0011@gmail.com</Link>
                        </Text>
                    </Flex>
                    <Flex className="contact-label" alignItems="center" mt={4}>
                        <Text as='i'><Icon as={PhoneIcon} id="call" /></Text>
                        <Text ml={2}>
                            CALL US
                            <Box className="num" ml={2}>
                                (+00) 555 666 999 00
                            </Box>
                        </Text>
                    </Flex>
                    <Flex className="contact-label" alignItems="center" mt={4}>
                        <Text as='i'><Icon as={MdLocationPin} className='loc' /></Text>
                        <Text as='span' ml={2}>
                            LOCATION
                            <Box ml={2} position='relative' right='0.5rem'>
                                Delanson, New York, 12053
                            </Box>
                        </Text>
                    </Flex>
                </Box>
                <Flex className="contact-account" mt={4}>
                    <Link href="https://www.facebook.com/" target="__blank">
                        <Text as='i'><Icon as={FaFacebookF} id="socialMedia" /></Text>
                    </Link>
                    <Link href="https://twitter.com/" target="__blank">
                        <Text as='i'><Icon as={FaTwitter} id="socialMedia" /></Text>
                    </Link>
                    <Link href="https://www.instagram.com/" target="__blank">
                        <Text as='i'><Icon as={FaInstagram} id="socialMedia" /></Text>
                    </Link>
                    <Link href="http://www.linkedin.com/" target="__blank">
                        <Text as='i'><Icon as={FaLinkedinIn} id="socialMedia" /></Text>
                    </Link>
                </Flex>
            </Box>
            <Box className="gmap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30607623636!2d-74.25987551247056!3d40.697149395077545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1636876318773!5m2!1sen!2sin"
                    title="Map"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </Box>
        </Box>
    );
}