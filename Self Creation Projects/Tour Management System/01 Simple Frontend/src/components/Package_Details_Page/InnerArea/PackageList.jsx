import { usePackageContext } from '../../../store/PackagesContext';
import { packagesData } from '../../Dummy_Data/PackagesData';
import Lists from '../../UI/Lists';
import './PackageList.css';

export default function PackageList() {
    const { excludeName } = usePackageContext();

    return (
        <div className="row inner-box-2">
            <h6>OTHER PACKAGES</h6>
            <hr className="hr-1" />
            <hr className="hr-2" />
            <ul>
                {packagesData
                    .filter((packages) => packages.title !== excludeName)
                    .map((packages) => (
                        <Lists
                            key={packages.id}
                            to={`../package/${packages.id}`}
                            children={packages.title}
                        />
                    )
                )}
            </ul>
        </div>
    );
}