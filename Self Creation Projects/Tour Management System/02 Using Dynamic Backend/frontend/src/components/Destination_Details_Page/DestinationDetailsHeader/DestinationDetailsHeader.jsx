import React from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/useHttp.jsx';
import Error from '../../UI/Error.jsx';
import './DestinationDetailsHeader.css';

const requestConfig = {};

export default function DestinationDetailsHeader() {
    const { id } = useParams();
    const {data: destinationsData, isLoading, error} = useHttp(
        'http://localhost:3000/destinations',
        requestConfig, []
    );
    const selectedDestination = destinationsData.find((destination) => destination.id.toString() === id);

    let errorMsg;
    if (!selectedDestination) {
        return errorMsg = <Error message='No destinations found.' />;
    }

    const backgroundImageStyle = {
        backgroundImage: `url(http://localhost:3000/${selectedDestination.image})`,
    };

    return (
        <section id="destinationHeader" style={backgroundImageStyle}>
            <header className="bottom-header">
                <div className="container">
                    <div className="row">
                        {isLoading && (<p className="center">Fetching destinations...</p>)}
                        {errorMsg}
                        {!destinationsData && (<Error message='No destinations found.' />)}
                        {error && (<Error message='Failed to fetch destinations.' />)}
                        {!error && (<h1>{selectedDestination.name}</h1>)}
                    </div>
                </div>
            </header>
        </section>
    );
}