import { Link } from 'react-router-dom';
import useHttp from '../../../hooks/useHttp.jsx';
import Error from '../../UI/Error/Error.jsx';
import './Packages.css';
import PackagesContent from './PackagesContent.jsx';

const requestConfig = {};

export default function Packages() {
    const {
        data: packagesData,
        isLoading,
        error
    } = useHttp('http://localhost:3000/packages', requestConfig, []);

    const limitedPackages = packagesData.slice(0, 3);

    return (
        <section id="homePagePackages">
			<div className="row">
				<h1><span>Tour</span> Packages</h1>
			</div>
			<div className="service-2-area">
				<div className="row">
                    {isLoading && (<p className="center">Fetching packages...</p>)}
                    {!packagesData && (<Error message='No packages found.' />)}
                    {error && (<Error message='Failed to fetch packages.' />)}
                    {!error && (
                        limitedPackages.map((packages) => (
                            <PackagesContent
                                key={packages.title}
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
				<div className="row">
					<Link to='/tour-packages' className="service-2-area-btn">
                        VIEW ALL PACKAGES
                    </Link>
				</div>
			</div>
		</section>
    );
}