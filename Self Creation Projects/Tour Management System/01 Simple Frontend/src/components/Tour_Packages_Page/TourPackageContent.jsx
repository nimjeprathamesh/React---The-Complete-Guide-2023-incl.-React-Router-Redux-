import { Link } from 'react-router-dom';
import { usePackageContext } from '../../store/PackagesContext';
import './TourPackage.css';

export default function TourPackageContent({id, imgSrc, title, location, details, duration, price}) {
    const { setExcludedName } = usePackageContext();

    const handleReadMoreClick = () => {
        setExcludedName(title);
    };

    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
            <Link to={`../package/${id}`} onClick={handleReadMoreClick}>
                <div className="inner-box" id="adventour">
                    <div className="inner-image-overlay">
                        <img src={imgSrc} alt='Tour Package' />
                        <div className="inner-overlay">
                            
                        </div>
                    </div>
                    <div className="caption-1">{title}</div>
                    <div className="caption-2">
                        <i className="fas fa-map-marker-alt" id="map"></i> {location}
                    </div>
                    <div className="para">
                        {details}
                    </div>
                    <div className="timeprice">
                        <div className="time">{duration}</div>
                        <div className="price">$ {price}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}