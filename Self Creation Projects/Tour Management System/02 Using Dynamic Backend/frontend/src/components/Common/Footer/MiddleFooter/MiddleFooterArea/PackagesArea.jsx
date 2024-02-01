
import useHttp from '../../../../../hooks/useHttp.jsx';
import Error from '../../../../UI/Error.jsx';
import Lists from '../../../../UI/Lists.jsx';
import '../MiddleFooter.css';

const requestConfig = {};

export default function PackagesArea() {
    document.addEventListener("DOMContentLoaded", function() {
        var activeElement = document.querySelector('#packages-list .active');
    
        if (activeElement) {
            var destinationList = document.getElementById('packages-list');
            destinationList.scrollTop = activeElement.offsetTop - destinationList.offsetTop;
        }
    });

    const {
        data: packagesData,
        isLoading,
        error
    } = useHttp('http://localhost:3000/packages', requestConfig, []);

    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12">
            <div className="middlefooter-area">
                <div className="heading">
                    Packages
                    <hr></hr>
                </div>
                <ul id="packages-list" className="unorder">
                    {isLoading && (<p className="center">Fetching tour packages...</p>)}
                    {!packagesData && (<Error message='No tour packages found.' />)}
                    {error && (<Error message='Failed to fetch tour packages.' />)}
                    {!error && (
                        packagesData.map((packages) => (
                            <Lists
                                key={packages.id}
                                to={`../package/${packages.id}`}
                                children={packages.title}
                                className={({isActive}) => isActive ? 'activeLinks' : undefined}
                            />
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
}