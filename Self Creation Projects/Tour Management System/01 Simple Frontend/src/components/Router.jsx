import { createBrowserRouter } from 'react-router-dom';
import About from './About_Page/About.jsx';
import Common from './Common/Common.jsx';
import ContactUs from './ContactUs_Page/ContactUs.jsx';
import DestinationDetails from './Destination_Details_Page/DestinationDetails.jsx';
import Destination from './Destination_Page/Destination.jsx';
import Home from './Home_Page/Home.jsx';
import PackageDetails from './Package_Details_Page/PackageDetails.jsx';
import TourPackage from './Tour_Packages_Page/TourPackage.jsx';
import Error from './UI/Error.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Common />,
        errorElement: <Error />,
        children: [
            {index: true, element: <Home />},
            {path: 'about', element: <About />},
            {path: 'destination', element: <Destination />},
            {path: 'destination/:id', element: <DestinationDetails />},
            {path: 'package', element: <TourPackage />},
            {path: 'package/:id', element: <PackageDetails />},
            {path: 'contactUs', element: <ContactUs />},
        ],
    },
]);

export default router;