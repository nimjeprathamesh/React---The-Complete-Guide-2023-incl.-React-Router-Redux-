import { useParams } from 'react-router-dom';
import { destinationsData } from '../../Dummy_Data/DestinationsData.jsx';
import './DestinationDescription.css';

export default function DestinationDescription() {
    const { id } = useParams();
    const selectedDestination = destinationsData.find((destination) => destination.id.toString() === id);

    if (!selectedDestination) {
        return (
            <dialog>
                <div>Destination not found</div>
            </dialog>
        );
    }

    const detailsParagraphs = selectedDestination.details.split('\n');

    return (
        <>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 col-12">
                <h5><i className="fa-regular fa-calendar" id="icon"></i> {selectedDestination.date}</h5>
                <hr></hr>
                <img src={selectedDestination.image} alt='Destination Details' />
                <i>&#xf017;</i> {selectedDestination.duration}
                {detailsParagraphs.map((paragraph, index) => (
                    <p key={index}>
                        {index > 0}
                        {paragraph}
                    </p>
                ))}
            </div>
        </>
    );
}