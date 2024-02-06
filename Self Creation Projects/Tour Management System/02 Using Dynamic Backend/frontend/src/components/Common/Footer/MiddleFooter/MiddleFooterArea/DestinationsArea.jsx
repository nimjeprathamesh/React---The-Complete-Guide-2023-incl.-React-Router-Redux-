import useHttp from '../../../../../hooks/useHttp.jsx';
import { useDestinationContext } from '../../../../../store/DestinationContext.jsx';
import Error from '../../../../UI/Error/Error.jsx';
import Lists from '../../../../UI/Lists.jsx';
import '../MiddleFooter.css';

const requestConfig = {};

export default function DestinationsArea() {
    const { setExcludedName } = useDestinationContext();

    const handleReadMoreClick = (name) => {
        setExcludedName(name);
    };

    document.addEventListener("DOMContentLoaded", function() {
        var activeElement = document.querySelector('#destination-list .active');
    
        if (activeElement) {
            var destinationList = document.getElementById('destination-list');
            destinationList.scrollTop = activeElement.offsetTop - destinationList.offsetTop;
        }
    });

    const {data: destinationsData, isLoading, error} = useHttp(
        'http://localhost:3000/destinations',
        requestConfig, []
    );
    const cssClass = error ? '': 'scroll';

    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12">
            <div className="middlefooter-area">
                <div className="heading">
                    Destinations
                    <hr></hr>
                </div>
                <ul id="destination-list" className={`unorder ${cssClass}`}>
                    {isLoading && (<p className="center">Fetching destinations...</p>)}
                    {!destinationsData && (<Error message='No destinations found.' />)}
                    {error && (<Error message='Failed to fetch destinations.' />)}
                    {!error && (
                        destinationsData
                            .filter((destination) => destination.name !== setExcludedName)
                            .map((destination) => (
                                <Lists
                                    key={destination.id}
                                    to={`../destination/${destination.id}`}
                                    children={destination.name}
                                    className={({isActive}) => isActive ? 'activeLinks' : undefined}
                                    onClick={handleReadMoreClick}
                                />
                            )
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}