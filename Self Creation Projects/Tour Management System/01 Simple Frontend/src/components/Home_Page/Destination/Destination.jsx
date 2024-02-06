import { Link } from 'react-router-dom';
import { destinationsData } from '../../Dummy_Data/DestinationsData.jsx';
import './Destination.css';
import DestinationContent from './DestinationContent.jsx';

export default function Destination() {
    const limitedDestinations = destinationsData.slice(0, 4);

    return (
        <section id="homePageDestination">
            <div className="row">
                <h1><span>Top</span> Destinations</h1>
            </div>
            <div className="row service-1-area">
                {limitedDestinations.map((destination) => (
                    <DestinationContent key={destination.id} destination={destination} />
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