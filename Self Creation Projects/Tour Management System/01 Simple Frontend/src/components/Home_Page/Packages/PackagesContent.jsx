import { Link } from 'react-router-dom';
import { usePackageContext } from '../../../store/PackagesContext';
import './Packages.css';

export default function PackagesContent({packages}) {
    const {setExcludedName} = usePackageContext();

    function handleReadMoreClick () {
        setExcludedName(packages.title);
    };

    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
            <Link to={`../package/${packages.id}`} onClick={handleReadMoreClick}>
                <div className="service-2-box" id="adventour">
                    <div className="service-2-image-overlay">
                        <img src={packages.image} alt='This is a adventour.' />
                        <div className="service-2-overlay">
                            
                        </div>
                    </div>
                    <div className="caption-1">{packages.title}</div>
                    <div className="caption-2">
                        <i className="fas fa-map-marker-alt" id="map"></i> {packages.location}
                    </div>
                    <div className="para">
                        {packages.details}
                    </div>
                    <div className="timeprice">
                        <div className="time">{packages.duration}</div>
                        <div className="price">{packages.price}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}