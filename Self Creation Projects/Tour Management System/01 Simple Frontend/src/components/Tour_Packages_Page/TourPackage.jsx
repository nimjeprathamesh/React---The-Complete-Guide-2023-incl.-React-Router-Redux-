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
                    {packagesData.map((packages) => (
                        <TourPackageContent key={packages.id} packages={packages} />
                    ))}
                </div>
            </section>
        </>
    );
}