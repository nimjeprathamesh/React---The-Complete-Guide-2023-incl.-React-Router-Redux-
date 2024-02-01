import { useParams } from 'react-router-dom';
import { packagesData } from '../../Dummy_Data/PackagesData';
import './PackageDescription.css';

export default function PackageDescription() {
    const { id } = useParams();
    const selectedPackage = packagesData.find((packages) => packages.id === id);

    if (!selectedPackage) {
        return <div>Destination not found</div>;
    }

    const detailsParagraphs = selectedPackage.details.split('\n');

    return (
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 col-12">
            <h5><i className="fa-solid fa-location-dot"></i> {selectedPackage.title}</h5>
            <div className="timeprice">
                <i className="fa-solid fa-calendar-days"></i> {selectedPackage.duration}
                <span><i className="fa-solid fa-dollar-sign"></i>{selectedPackage.price}</span>
            </div>
            <hr></hr>
            <img src={selectedPackage.image} alt='Package Details' />
            <div className="row">
                <div className="caption">
                    <i className="fa-solid fa-location-dot"></i> {selectedPackage.location}
                </div>
                {detailsParagraphs.map((paragraph, index) => (
                    <p key={index}>
                        {index > 0}
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}