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
                        {destinationsData.map((destination, index) => (
                            <DestinationContent
                                key={index}
                                id={destination.id}
                                imgSrc={destination.image}
                                name={destination.name}
                                details={destination.details}
                                duration={destination.duration}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}