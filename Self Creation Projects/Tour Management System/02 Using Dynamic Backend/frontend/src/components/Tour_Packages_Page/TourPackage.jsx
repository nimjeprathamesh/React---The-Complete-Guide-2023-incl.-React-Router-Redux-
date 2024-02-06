import useHttp from '../../hooks/useHttp.jsx';
import Error from '../UI/Error/Error.jsx';
import './TourPackage.css';
import TourPackageContent from './TourPackageContent.jsx';
import TourPackageHeader from './TourPackageHeader/TourPackageHeader';

const requestConfig = {};

export default function TourPackage() {
    const {
        data: packagesData,
        isLoading,
        error
    } = useHttp('http://localhost:3000/packages', requestConfig, []);

    return (
        <>
            <TourPackageHeader />
            <section id="tour_page">
                <div className="row inner-area">
                    {isLoading && (<p className="center">Fetching tour packages...</p>)}
                    {error && (<Error message='Failed to fetch tour packages.' />)}
                    {!packagesData && (<Error message='No tour packages found.' />)}
                    {!error && (
                        packagesData.map((packages) => (
                            <TourPackageContent
                                key={packages.id}
                                id={packages.id}
                                imgSrc={`http://localhost:3000/${packages.image}`}
                                title={packages.title}
                                location={packages.location}
                                details={packages.details}
                                duration={packages.duration}
                                price={packages.price}
                            />
                        )
                    ))}
                </div>
            </section>
        </>
    );
}