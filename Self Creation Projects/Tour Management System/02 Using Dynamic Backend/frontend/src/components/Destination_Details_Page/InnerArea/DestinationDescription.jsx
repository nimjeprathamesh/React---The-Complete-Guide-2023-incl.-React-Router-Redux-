import React from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/useHttp.jsx';
import Error from '../../UI/Error/Error.jsx';
import './DestinationDescription.css';

const requestConfig = {};

export default function DestinationDescription() {
    const { id } = useParams();
    const {data: destinationsData, isLoading, error} = useHttp(
        'http://localhost:3000/destinations',
        requestConfig, []
    );
    const selectedDestination = destinationsData.find((destination) => destination.id.toString() === id);

    let errorMsg;
    if (!selectedDestination) {
        return errorMsg = <Error message='No destination found with the provided ID.' />;
    }

    const detailsParagraphs = selectedDestination.details.split('\n');

    return (
        <>
            {isLoading && (<p className="center">Fetching destinations...</p>)}
            {errorMsg}
            {!destinationsData && (<Error message='No destinations found.' />)}
            {error && (<Error message='Failed to fetch destinations details.' />)}
            {!error && (
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h5><i className="fa-regular fa-calendar" id="icon"></i> {selectedDestination.date}</h5>
                    <hr></hr>
                    <img src={`http://localhost:3000/${selectedDestination.image}`} alt='Destination Details' />
                    <i>&#xf017;</i> {selectedDestination.duration}
                    {detailsParagraphs.map((paragraph, index) => (
                        <p key={index}>
                            {index > 0}
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
}