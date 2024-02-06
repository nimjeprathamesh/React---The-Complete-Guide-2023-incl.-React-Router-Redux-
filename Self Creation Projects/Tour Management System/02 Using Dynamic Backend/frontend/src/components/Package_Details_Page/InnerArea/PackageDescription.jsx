import React from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/useHttp.jsx';
import Error from '../../UI/Error/Error.jsx';
import './PackageDescription.css';

const requestConfig = {};

export default function PackageDescription() {
    const { id } = useParams();
    const {
        data: packagesData,
        isLoading,
        error
    } = useHttp('http://localhost:3000/packages', requestConfig, []);

    const selectedPackage = packagesData.find((packages) => packages.id.toString() === id);

    if (!selectedPackage) {
        return <Error message='No packages found with the provided ID.' />;
    }

    const detailsParagraphs = selectedPackage.details.split('\n');

    return (
        <>
            {isLoading && (<p className="center">Fetching packages descriptions...</p>)}
            {!packagesData && (<Error message='No packages descriptions found.' />)}
            {error && (<Error message='Failed to fetch packages descriptions.' />)}
            {!error && (
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h5><i className="fa-solid fa-location-dot"></i> {selectedPackage.title}</h5>
                    <div className="timeprice">
                        <i className="fa-solid fa-calendar-days"></i> {selectedPackage.duration}
                        <span><i className="fa-solid fa-dollar-sign"></i>{selectedPackage.price}</span>
                    </div>
                    <hr></hr>
                    <img src={`http://localhost:3000/${selectedPackage.image}`} alt='Package Details' />
                    <div className="row">
                        <div className="caption">
                            <i className="fa-solid fa-location-dot"></i> {selectedPackage.location}
                        </div>
                        {detailsParagraphs.map((paragraph, index) => (
                            <p key={index}>
                                {index > 0}
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}