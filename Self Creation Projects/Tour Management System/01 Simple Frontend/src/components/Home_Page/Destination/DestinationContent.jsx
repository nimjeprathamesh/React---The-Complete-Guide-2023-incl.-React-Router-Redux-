import { Link } from 'react-router-dom';
import { useDestinationContext } from '../../../store/DestinationContext.jsx';
import './Destination.css';

export default function DestinationContent({destination}) {
    const { setExcludedName } = useDestinationContext();

    function handleReadMoreClick () {
        setExcludedName(destination.name);
    };

    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 p-0 service-1-box">
            <Link to={`../destination/${destination.id}`} onClick={handleReadMoreClick}>
                <div className="service-1-image-overlay">
                    <img src={destination.image} alt="" />
                    <div className="service-1-overlay">
                            
                    </div>
                </div>
                <figcaption className="title"><b>{destination.name}</b></figcaption>
                <figcaption className="caption">
                    <i className="fa-regular fa-clock"></i> {destination.duration}
                </figcaption>
            </Link>
        </div>
    );
}