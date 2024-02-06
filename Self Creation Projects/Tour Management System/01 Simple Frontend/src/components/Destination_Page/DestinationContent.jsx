import { Link } from 'react-router-dom';
import { useDestinationContext } from '../../store/DestinationContext.jsx';
import './Destination.css';

export default function DestinationContent({destination}) {
    const { setExcludeName } = useDestinationContext();

    const handleReadMoreClick = () => {
        setExcludeName(destination.name);
    };

    return (
        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12">
            <div className="destination">
                <div className="desti-img-overlay">
                    <img src={destination.image} alt='Destination' />
                    <div className="desti-overlay">

                    </div>
                </div>
                <h5>{destination.name}</h5>
                <p>{destination.details}</p>
                <i>&#xf017; {destination.duration};</i>
                <Link
                    to={`../destination/${destination.id}`}
                    className="service-btn"
                    onClick={handleReadMoreClick}
                >
                    Read more
                </Link>
            </div>
        </div>
    );
}