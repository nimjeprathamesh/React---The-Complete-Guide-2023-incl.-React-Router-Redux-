import { Box, Img, Text } from '@chakra-ui/react';
import '../MiddleFooter.css';

export default function DescriptionArea() {
    return (
        <Box className="middlefooter-area">
            <Img
                src={require("../../../../../../images/logo.png")}
                className="middlefooter-logo"
                alt='MiddleFooter'
            />
            <Text as='p'>
                Today's discerning cinsumers have high standards for their omnichann customer experien whether they'r logging.
            </Text>
            <Text as='p'>
                There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
            </Text>
        </Box>
    );
}