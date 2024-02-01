import { useParams } from 'react-router-dom';
import { destinationsData } from '../../Dummy_Data/DestinationsData.jsx';
import './DestinationDetailsHeader.css';

export default function DestinationDetailsHeader() {
    const { id } = useParams();
    const selectedDestination = destinationsData.find((destination) => destination.id.toString() === id);

    if (!selectedDestination) {
        return <div>Destination not found</div>;
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${selectedDestination.image})`,
    };

    return (
        <section id="destinationHeader" style={backgroundImageStyle}>
            <header className="bottom-header">
                <div className="container">
                    <div className="row">
                        <h1>{selectedDestination.name}</h1>
                    </div>
                </div>
            </header>
        </section>
    );
}