import React from 'react';
import { Link } from 'react-router-dom';
import useHttp from '../../../hooks/useHttp.jsx';
import Error from '../../UI/Error.jsx';
import './Destination.css';
import DestinationContent from './DestinationContent.jsx';

const requestConfig = {};

export default function Destination() {
    const {data: destinationsData, isLoading, error} = useHttp(
        'http://localhost:3000/destinations',
        requestConfig, []
    );
    const limitedDestinations = destinationsData.slice(0, 4);

    return (
        <section id="homePageDestination">
            <div className="row">
                <h1><span>Top</span> Destinations</h1>
            </div>
            <div className="row service-1-area">
                {isLoading && (<p className="center">Fetching destinations...</p>)}
                {!destinationsData && (<Error message='No destinations found.' />)}
                {error && (<Error message='Failed to fetch destinations.' />)}
                {!error && (
                    limitedDestinations.map((destination, index) => (
                        <DestinationContent
                            key={index}
                            id={destination.id}
                            imgSrc={`http://localhost:3000/${destination.image}`}
                            name={destination.name}
                            duration={destination.duration}
                        />
                    )
                ))}
            </div>
            <div className="row">
                <Link to='/destination' className="service-1-area-btn">
                    VIEW ALL DESTINATION
                </Link>
            </div>
        </section>
    )
}