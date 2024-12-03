import { FiBox, FiHome, FiMapPin, FiMessageSquare, FiUsers } from 'react-icons/fi';

export const LinkItems = [
    {
        path: '/admin/homepage',
        name: ' Home',
        icon: FiHome,
    },
    {
        path: '/admin/destination',
        name: ' Destination',
        icon: FiMapPin
    },
    {
        path: '/admin/package',
        name: ' Tour Packages',
        icon: FiBox
    },
    {
        path: '/admin/testimonial',
        name: ' Testimonial',
        icon: FiMessageSquare
    },
    {
        path: '/admin/membership',
        name: ' Membership',
        icon: FiUsers
    },
];
