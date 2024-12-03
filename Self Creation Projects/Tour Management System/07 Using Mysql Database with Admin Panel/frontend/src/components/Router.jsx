import { createBrowserRouter } from 'react-router-dom';
import SignIn, { action as SignInAction } from '../Pages/Authentication/SignIn.jsx';
import SignUp, { action as SignUpAction } from '../Pages/Authentication/Signup.jsx';
import EditDestination, { action as UpdateDestinationAction } from '../Pages/Destination/EditDestination.jsx';
import NewDestination, { action as NewDestinationAction } from '../Pages/Destination/NewDestination.jsx';
import EditMembership, { action as UpdateMembershipAction } from '../Pages/Membership/EditMembership.jsx';
import NewMembership, { action as NewMembershipAction } from '../Pages/Membership/NewMembership.jsx';
import EditPackages, { action as UpdatePackageAction } from '../Pages/Package/EditPackage.jsx';
import NewPackage, { action as NewPackageAction } from '../Pages/Package/NewPackage.jsx';
import EditTestimonial, { action as UpdateTestimonialAction } from '../Pages/Testimonial/EditTestimonial.jsx';
import NewTestimonial, { action as NewTestimonialAction } from '../Pages/Testimonial/NewTestimonial.jsx';
import combinedActions from '../util/CombinedAction.jsx';
import combinedLoader, { destinationDetailsLoader, packageDetailsLoader } from '../util/CombinedLoader.jsx';
import BackendCommon from './Backend/Common/Common.jsx';
import DestinationPage from './Backend/DestinationPage/DestinationPage.jsx';
import HomePage from './Backend/HomePage/HomePage.jsx';
import MembershipPage from './Backend/MembershipPage/MembershipPage.jsx';
import PackagePage from './Backend/PackagePage/PackagePage.jsx';
import TestimonialPage from './Backend/TestimonialPage/TestimonialPage.jsx';
import About from './Frontend/About_Page/About.jsx';
import Common from './Frontend/Common/Common.jsx';
import ContactUs from './Frontend/ContactUs_Page/ContactUs.jsx';
import DestinationDetails from './Frontend/Destination_Details_Page/DestinationDetails.jsx';
import Destination from './Frontend/Destination_Page/Destination.jsx';
import Home from './Frontend/Home_Page/Home.jsx';
import { action as feedbackAction } from './Frontend/Inquiry_Form/InquiryForm.jsx';
import PackageDetails from './Frontend/Package_Details_Page/PackageDetails.jsx';
import TourPackage from './Frontend/Tour_Packages_Page/TourPackage.jsx';
import Error from "./UI/Error/Error.jsx";
import ErrorElement from "./UI/Error/ErrorElement.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Common />,
        errorElement: <Error />,
        loader: combinedLoader,
        children: [
            {index: true, element: <Home />, loader: combinedLoader, action: combinedActions},
            {path: 'about', element: <About />, loader: combinedLoader},
            {path: 'destination', element: <Destination />, loader: combinedLoader},
            {
                path: 'destination/:id',
                element: <DestinationDetails />,
                loader: destinationDetailsLoader,
                action: feedbackAction
            },
            {path: 'package', element: <TourPackage />, loader: combinedLoader},
            {path: 'package/:id', element: <PackageDetails />, loader: packageDetailsLoader, action: feedbackAction},
            {path: 'contactUs', element: <ContactUs />, action: feedbackAction},
        ],
    },
    {path: 'admin/signIn', element: <SignIn />, action: SignInAction},
    {path: 'admin/signUp', element: <SignUp />, action: SignUpAction},
    {
        path: 'admin',
        element: <BackendCommon />,
        errorElement: <ErrorElement />,
        children: [
            {path: 'homepage', element: <HomePage />, loader: combinedLoader},
            {path: 'destination', element: <DestinationPage />, loader: combinedLoader},
            {path: 'destination/add', element: <NewDestination />, action: NewDestinationAction},
            {path: 'destination/:id', element: <EditDestination />, action: UpdateDestinationAction},
            {path: 'package', element: <PackagePage />, loader: combinedLoader},
            {path: 'package/add', element: <NewPackage />, action: NewPackageAction},
            {path: 'package/:id', element: <EditPackages />, action: UpdatePackageAction},
            {path: 'testimonial', element: <TestimonialPage />, loader: combinedLoader},
            {path: 'testimonial/add', element: <NewTestimonial />, action: NewTestimonialAction},
            {path: 'testimonial/:id', element: <EditTestimonial />, action: UpdateTestimonialAction},
            {path: 'membership', element: <MembershipPage />, loader: combinedLoader},
            {path: 'membership/add', element: <NewMembership />, action: NewMembershipAction},
            {path: 'membership/:id', element: <EditMembership />, action: UpdateMembershipAction}
        ],
    },
]);

export default router;