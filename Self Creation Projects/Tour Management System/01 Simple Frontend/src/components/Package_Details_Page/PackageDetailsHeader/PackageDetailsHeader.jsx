import { useParams } from 'react-router-dom';
import { packagesData } from '../../Dummy_Data/PackagesData';
import './PackageDetailsHeader.css';

export default function PackageDetailsHeader() {
    const { id } = useParams();
    const selectedPackage = packagesData.find((packages) => packages.id === id);

    if (!selectedPackage) {
        return <div>Destination not found</div>;
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${selectedPackage.image})`,
    };

    return (
        <section id="packageDetailsHeader" style={backgroundImageStyle}>
            <header className="bottom-header">
                <div className="container">
                    <div className="row">
                        <h1>{selectedPackage.title}</h1>
                    </div>
                </div>
            </header>
        </section>
    );
}