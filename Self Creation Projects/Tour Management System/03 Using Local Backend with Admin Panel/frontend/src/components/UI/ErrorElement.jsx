import { Box, Heading, Text } from "@chakra-ui/react";
import { useTheme } from "../../hooks/useTheme.jsx";
import Footer from "../Common/Footer/Footer.jsx";
import Header from "../Common/Header/Header.jsx";

export default function ErrorElement() {
    const {themeCss} = useTheme();

    return (
        <Box id='error' style={themeCss}>
            <Header />
            <Box as='main'>
                <Heading as='h2'>An error occurred!</Heading>
                <Text as='p'>Could not find this page!</Text>
            </Box>
            <Footer />
        </Box>
    );
}