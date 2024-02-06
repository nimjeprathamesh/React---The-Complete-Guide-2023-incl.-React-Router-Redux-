import useHttp from '../../../hooks/useHttp.jsx';
import { usePackageContext } from '../../../store/PackagesContext.jsx';
import Error from '../../UI/Error/Error.jsx';
import Lists from '../../UI/Lists.jsx';
import './PackageList.css';

const requestConfig = {};

export default function PackageList() {
    const { excludeName } = usePackageContext();
    const {
        data: packagesData,
        isLoading,
        error
    } = useHttp('http://localhost:3000/packages', requestConfig, []);

    if(isLoading) {
        return <p className="center">Fetching tour packages...</p>;
    }

    return (
        <div className="row inner-box-2">
            <h6>OTHER PACKAGES</h6>
            <hr className="hr-1" />
            <hr className="hr-2" />
            <ul>
                {!packagesData && (<Error message='No packages found.' />)}
                {error && (<Error message='failed to fetch packages.' />)}
                {!error && (
                    packagesData
                        .filter((packages) => packages.title !== excludeName)
                        .map((packages) => (
                            <Lists
                                key={packages.id}
                                to={`../package/${packages.id}`}
                                children={packages.title}
                            />
                        )
                    )
                )}
            </ul>
        </div>
    );
}