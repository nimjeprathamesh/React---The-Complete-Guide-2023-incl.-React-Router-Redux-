import React from 'react';
import useHttp from '../../hooks/useHttp.jsx';
import Error from '../UI/Error.jsx';
import './Destination.css';
import DestinationContent from './DestinationContent.jsx';
import DestinationHeader from './DestinationHeader/DestinationHeader.jsx';

const requestConfig = {};

export default function Destination() {
    const {data: destinationsData, isLoading, error} = useHttp(
        'http://localhost:3000/destinations',
        requestConfig, []
    );

    return (
        <>
            <DestinationHeader />
            <section id="inner-page">
                <div className="inner-area">
                    <div className="row">
                        {isLoading && (<p className="center">Fetching destinations...</p>)}
                        {error && (<Error message='Failed to fetch destinations.' />)}
                        {!destinationsData && (<Error message='No destinations found.' />)}
                        {!error && (
                            destinationsData.map((destination) => (
                                <DestinationContent
                                    key={destination.id}
                                    id={destination.id}
                                    imgSrc={`http://localhost:3000/${destination.image}`}
                                    name={destination.name}
                                    details={destination.details}
                                    duration={destination.duration}
                                />
                            )
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}