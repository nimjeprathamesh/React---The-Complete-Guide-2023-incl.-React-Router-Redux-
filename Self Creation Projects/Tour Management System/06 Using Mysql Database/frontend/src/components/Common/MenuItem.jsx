import { FiBox, FiHome, FiInfo, FiMapPin } from 'react-icons/fi';
import { RiContactsBook2Fill } from "react-icons/ri";

export const menuItem = [
    {
        to: '',
        name: 'Home',
        icon: FiHome
    },
    {
        to: 'about',
        name: 'About',
        icon: FiInfo
    },
    {
        to: 'package',
        name: 'Tour Packages',
        icon: FiBox
    },
    {
        to: 'destination',
        name: 'Destination',
        icon: FiMapPin
    },
    {
        to: 'contactUs',
        name: 'Contact Us',
        icon: RiContactsBook2Fill
    },
];