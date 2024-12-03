import { Box, Flex, Img } from "@chakra-ui/react";
import { useTheme } from "../../../hooks/useTheme.jsx";
import ToggleTheme from '../../ToggleTheme.jsx';
import InputField from './InputField';
import './LoginPage.css';

export default function LoginPage() {
    const {isDark} = useTheme();
    const cssTheme = {
        backgroundColor: isDark ? '#1a202c' : '#560fb3',
        color: isDark ? '#f9f9f9' : '#1a202c'
    };

    return (
        <Flex id="loginPage" display='flex' justifyContent='center' style={cssTheme}>
            <Flex direction="column" alignItems="center">
                <Box>
                    <Img
                        src={isDark ? require("../../../images/logoDark.png") : require("../../../images/logo.png")}
                        className="logo_img"
                        alt="logo"
                    />
                </Box>
                <ToggleTheme />
                <Box margin='5rem 0'>
                    <InputField />
                </Box>
            </Flex>
        </Flex>
    );
}