import { packagesData } from '../Dummy_Data/PackagesData.jsx';
import './TourPackage.css';
import TourPackageContent from './TourPackageContent.jsx';
import TourPackageHeader from './TourPackageHeader/TourPackageHeader';

export default function TourPackage() {
    return (
        <>
            <TourPackageHeader />
            <section id="tour_page">
                <div className="row inner-area">
                    {packagesData.map((packages, index) => (
                        <TourPackageContent
                            key={index}
                            id={packages.id}
                            imgSrc={packages.image}
                            title={packages.title}
                            location={packages.location}
                            details={packages.details}
                            duration={packages.duration}
                            price={packages.price}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}