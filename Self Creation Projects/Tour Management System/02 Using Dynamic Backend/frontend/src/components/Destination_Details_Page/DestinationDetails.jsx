import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DestinationDetails.css';
import DestinationDetailsHeader from './DestinationDetailsHeader/DestinationDetailsHeader.jsx';
import DestinationDescription from './InnerArea/DestinationDescription.jsx';
import DestinationList from './InnerArea/DestinationList.jsx';
import InquiryForm from './InnerArea/InquiryForm.jsx';

export default function DestinationDetails() {
    const location = useLocation();
    const excludeName = location.state?.excludeName;
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const storedExcludeName = localStorage.getItem('excludeName');
        if (initialLoad) {
            if (!storedExcludeName || storedExcludeName !== excludeName) {
                localStorage.setItem('excludeName', excludeName || '');
            }
            setInitialLoad(false);
        }
    }, [excludeName, initialLoad]);

    return (
        <>
            <DestinationDetailsHeader />
            <section id="destinationDetailsPage">
                <div className="row inner-area">
                    <DestinationDescription />
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 p-0 inner-box-1">
                        <h6>INQUIRY FORM</h6>
                        <hr className="hr-1"></hr>
                        <hr className="hr-2"></hr>
                        <InquiryForm />
                        {!initialLoad && <DestinationList excludeName={excludeName} />}
                    </div>
                </div>
            </section>
        </>
    );
}