import React from 'react';
import useHttp from '../../hooks/useHttp.jsx';
import Error from '../UI/Error/Error.jsx';
import './About.css';
import AboutHeader from './AboutHeader/AboutHeader.jsx';
import AboutDestinationContent from './InnerArea/AboutDestinationContent.jsx';
import InnerArea from './InnerArea/InnerArea.jsx';

const requestConfig = {};

export default function About() {
    const {data: destinationsData, isLoading, error} = useHttp(
        'http://localhost:3000/destinations',
        requestConfig, []
    );
    
    return (
        <>
            <AboutHeader />
            <section id="description_page">
                <InnerArea />
                <div className="dest-area">
                    <h1>DESTINATION FOR THE CLIENT.</h1>
                    <hr className="horizontal"></hr>
                    <div className="row dest-details">
                        {isLoading && (<p className="center">Fetching destinations...</p>)}
                        {error && (<Error message='Failed to fetch destinations.' />)}
                        {!destinationsData && (<Error message='No destinations found.' />)}
                        {!error && (
                            destinationsData.map((destination) => (
                                <AboutDestinationContent
                                    key={destination.id}
                                    id={destination.id}
                                    imgSrc={`http://localhost:3000/${destination.image}`}
                                    name={destination.name}
                                    duration={destination.duration}
                                    details={destination.details}
                                />
                            )
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}