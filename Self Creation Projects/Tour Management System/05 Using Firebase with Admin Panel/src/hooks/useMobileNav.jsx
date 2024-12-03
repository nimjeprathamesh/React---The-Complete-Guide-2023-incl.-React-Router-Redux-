import { Icon, useColorMode } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { FaPalette } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { auth } from "../util/firebaseConfig";

export default function useMobileNav() {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const [showMenu, setShowMenu] = useState(false);
    const [showThemeOptions, setShowThemeOptions] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const title = (<>
        <Icon as={FaPalette} /> &nbsp;
        Appearance &nbsp;
        <Icon
            ml={20}
            transition='all 0.3s'
            transform={showThemeOptions ? 'rotate(180deg)' : 'none'}
            as={FiChevronDown}
        />
    </>);
    const menuRef = useRef(null);
    const notificationsRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
                setShowThemeOptions(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, notificationsRef]);

    async function handleLogout(){
        try {
            await signOut(auth); // Call signOut function
            navigate("/admin/signIn"); // Redirect to the homepage or login page after logout
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    function handleSetTheme(themeMode) {
        if (themeMode === 'system') {
            toggleColorMode();
        } else if (themeMode === 'light' && colorMode !== 'light') {
            toggleColorMode();
        } else if (themeMode === 'dark' && colorMode !== 'dark') {
            toggleColorMode();
        }
        setShowMenu(false);
        setShowThemeOptions(false);
    }

    function handleMenuItemClick() {
        setShowThemeOptions(!showThemeOptions)
    }

    function handleBellIconClick() {
        setShowNotifications(!showNotifications);
    }

    return {
        showMenu, showThemeOptions, title, menuRef, notificationsRef, showNotifications, setShowMenu, handleLogout, handleSetTheme, handleMenuItemClick, handleBellIconClick
    };
};
