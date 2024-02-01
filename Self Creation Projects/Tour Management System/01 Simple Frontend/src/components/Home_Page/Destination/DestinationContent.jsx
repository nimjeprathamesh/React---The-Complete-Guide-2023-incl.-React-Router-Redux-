import { Link } from 'react-router-dom';
import { useDestinationContext } from '../../../store/DestinationContext.jsx';
import './Destination.css';

export default function DestinationContent({id, imgSrc, name, duration}) {
    const { setExcludedName } = useDestinationContext();

    const handleReadMoreClick = () => {
        setExcludedName(name);
    };

    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 p-0 service-1-box">
            <Link to={`../destination/${id}`} onClick={handleReadMoreClick}>
                <div className="service-1-image-overlay">
                    <img src={imgSrc} alt="" />
                    <div className="service-1-overlay">
                            
                    </div>
                </div>
                <figcaption className="title"><b>{name}</b></figcaption>
                <figcaption className="caption">
                    <i className="fa-regular fa-clock"></i> {duration}
                </figcaption>
            </Link>
        </div>
    );
}