import { destinationsData } from '../Dummy_Data/DestinationsData.jsx';
import './Destination.css';
import DestinationContent from './DestinationContent.jsx';
import DestinationHeader from './DestinationHeader/DestinationHeader.jsx';

export default function Destination() {
    return (
        <>
            <DestinationHeader />
            <section id="inner-page">
                <div className="inner-area">
                    <div className="row">
                        {destinationsData.map((destination) => (
                            <DestinationContent key={destination.id} destination={destination} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}