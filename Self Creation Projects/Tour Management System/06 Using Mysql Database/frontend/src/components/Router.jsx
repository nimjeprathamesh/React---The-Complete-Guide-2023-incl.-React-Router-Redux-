import { createBrowserRouter } from 'react-router-dom';
import { action as feedbackAction } from '../components/Inquiry_Form/InquiryForm.jsx';
import combinedActions from '../util/CombinedAction.jsx';
import combinedLoader, { destinationDetailsLoader, packageDetailsLoader } from '../util/CombinedLoader.jsx';
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
        loader: combinedLoader,
        errorElement: <Error />,
        children: [
            {index: true, element: <Home />, loader: combinedLoader, action: combinedActions},
            {path: 'about', element: <About />, loader: combinedLoader},
            {path: 'destination', element: <Destination />, loader: combinedLoader},
            {
                path: 'destination/:id',
                element: <DestinationDetails />,
                loader: destinationDetailsLoader,
                action: feedbackAction,
            },
            {path: 'package', element: <TourPackage />, loader: combinedLoader},
            {path: 'package/:id', element: <PackageDetails />, loader: packageDetailsLoader, action: feedbackAction},
            {path: 'contactUs', element: <ContactUs />, action: feedbackAction,},
        ],
    },
]);

export default router;