import useHttp from '../../../hooks/useHttp.jsx';
import { useDestinationContext } from '../../../store/DestinationContext.jsx';
import Error from '../../UI/Error/Error.jsx';
import Lists from '../../UI/Lists.jsx';
import './DestinationList.css';

const requestConfig = {};

export default function DestinationList() {
    const { excludeName, setExcludedName } = useDestinationContext();
    const {data: destinationsData, isLoading, error} = useHttp(
        'http://localhost:3000/destinations',
        requestConfig, []
    );

    const handleReadMoreClick = (name) => {
        setExcludedName(name);
    };

    return (
        <div className="desti-list">
            <h6>NEXT DESTINATION</h6>
            <hr className="hr-1"></hr>
            <hr className="hr-2"></hr>
            <ul>
                {isLoading && (<p className="center">Fetching destinations...</p>)}
                {!destinationsData && (<Error message='No destinations found.' />)}
                {error && (<Error message='Failed to fetch destinations.' />)}
                {!error && (
                    destinationsData
                        .filter((destination) => destination.name !== excludeName)
                        .map((destination) => (
                            <Lists
                                key={destination.id}
                                to={`../destination/${destination.id}`}
                                children={destination.name}
                                onClick={handleReadMoreClick}
                            />
                        )
                    )
                )}
            </ul>
        </div>
    );
}