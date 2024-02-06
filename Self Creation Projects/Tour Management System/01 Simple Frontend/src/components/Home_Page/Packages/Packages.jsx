import { Link } from 'react-router-dom';
import { packagesData } from '../../Dummy_Data/PackagesData.jsx';
import './Packages.css';
import PackagesContent from './PackagesContent.jsx';

export default function Packages() {
    const limitedPackages = packagesData.slice(0, 3);

    return (
        <section id="homePagePackages">
			<div className="row">
				<h1><span>Tour</span> Packages</h1>
			</div>
			<div className="service-2-area">
				<div className="row">
                    {limitedPackages.map((packages) => (
                        <PackagesContent key={packages.title} packages={packages} />
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