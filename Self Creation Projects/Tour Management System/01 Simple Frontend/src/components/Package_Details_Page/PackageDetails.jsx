import React from 'react';
import { useDestinationContext } from '../../store/DestinationContext.jsx';
import InquiryForm from './InnerArea/InquiryForm.jsx';
import PackageDescription from './InnerArea/PackageDescription';
import PackageList from './InnerArea/PackageList';
import './PackageDetails.css';
import PackageDetailsHeader from './PackageDetailsHeader/PackageDetailsHeader';

export default function PackageDetails() {
    const {initialLoad} = useDestinationContext;

    return (
        <>
            <PackageDetailsHeader />
            <section id="packageDetailsPage">
                <div className="row inner-area">
                    <PackageDescription />
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 p-0 inner-box-1">
                        <InquiryForm />
                        {!initialLoad && <PackageList />}
                    </div>
                </div>
            </section>
        </>
    );
}