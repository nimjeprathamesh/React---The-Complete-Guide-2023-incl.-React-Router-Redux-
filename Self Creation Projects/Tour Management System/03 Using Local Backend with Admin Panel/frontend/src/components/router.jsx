import { createBrowserRouter } from 'react-router-dom';
import CombinedActions from '../util/CombinedAction.jsx';
import combinedLoader, { destinationDetailsLoader, packageDetailsLoader } from '../util/CombinedLoader.jsx';
import About from './About_Page/About.jsx';
import Common from './Common/Common.jsx';
import ContactUs from './ContactUs_Page/ContactUs.jsx';
import DestinationDetails from './Destination_Details_Page/DestinationDetails.jsx';
import Destination from './Destination_Page/Destination.jsx';
import Home from './Home_Page/Home.jsx';
import {
    action as contactAction,
    action as destinationAction,
    action as packageAction
} from './Inquiry_Form/InquiryForm.jsx';
import PackageDetails from './Package_Details_Page/PackageDetails.jsx';
import TourPackage from './Tour_Packages_Page/TourPackage.jsx';
import ErrorElement from './UI/ErrorElement.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Common />,
        errorElement: <ErrorElement />,
        loader: combinedLoader,
        children: [
            {index: true, element: <Home />, loader: combinedLoader, action: CombinedActions},
            {path: 'about', element: <About />, loader: combinedLoader},
            {path: 'destination', element: <Destination />, loader: combinedLoader},
            {
                path: 'destination/:id',
                element: <DestinationDetails />,
                loader: destinationDetailsLoader,
                action: destinationAction,
            },
            {path: 'package', element: <TourPackage />, loader: combinedLoader},
            {path: 'package/:id', element: <PackageDetails />, loader: packageDetailsLoader, action: packageAction},
            {path: 'contactUs', element: <ContactUs />, action: contactAction},
        ],
    },
]);

export default router;