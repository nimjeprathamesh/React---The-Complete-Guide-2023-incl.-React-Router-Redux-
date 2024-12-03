import { Box, Flex, Image } from "@chakra-ui/react";
import useTheme from '../../../../hooks/useTheme';
import { LinkItems } from "./LinkItems";
import NavItem from "./NavItem";

export default function SidebarContent({ onClose, ...rest }) {
    const {isDark} = useTheme();
    
    function handleClick() {
        onClose();
    }

    return (
        <Box
            transition="3s ease"
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
        {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image
                    src={isDark ?
                        require("../../../../images/logo.png") :
                        require("../../../../images/logoDark.png")
                    }
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} path={link.path} onClick={handleClick}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};