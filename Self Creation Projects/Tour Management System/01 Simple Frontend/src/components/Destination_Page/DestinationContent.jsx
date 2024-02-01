import { Link } from 'react-router-dom';
import { useDestinationContext } from '../../store/DestinationContext.jsx';
import './Destination.css';

export default function DestinationContent({id, imgSrc, name, details, duration}) {
    const { setExcludeName } = useDestinationContext();

    const handleReadMoreClick = () => {
        setExcludeName(name);
    };

    return (
        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12">
            <div className="destination">
                <div className="desti-img-overlay">
                    <img src={imgSrc} alt='Destination' />
                    <div className="desti-overlay">

                    </div>
                </div>
                <h5>{name}</h5>
                <p>{details}</p>
                <i>&#xf017; {duration};</i>
                <Link
                    to={`../destination/${id}`}
                    className="service-btn"
                    onClick={handleReadMoreClick}
                >
                    Read more
                </Link>
            </div>
        </div>
    );
}