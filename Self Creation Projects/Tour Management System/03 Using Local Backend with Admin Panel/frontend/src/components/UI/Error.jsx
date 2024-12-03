import { Box, Heading, Text } from "@chakra-ui/react";
import { useTheme } from "../../hooks/useTheme.jsx";

export default function ErrorElement({message}) {
    const {themeCss} = useTheme();

    return (
        <Box id='error' style={themeCss}>
            <Box as='main'>
                <Heading as='h2'>An error occurred!</Heading>
                <Text as='p'>{message}</Text>
            </Box>
        </Box>
    );
}