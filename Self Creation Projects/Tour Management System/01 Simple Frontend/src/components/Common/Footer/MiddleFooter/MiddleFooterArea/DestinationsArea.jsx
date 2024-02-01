import { useDestinationContext } from '../../../../../store/DestinationContext.jsx';
import { destinationsData } from '../../../../Dummy_Data/DestinationsData.jsx';
import Lists from '../../../../UI/Lists.jsx';
import '../MiddleFooter.css';

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

    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12">
            <div className="middlefooter-area">
                <div className="heading">
                    Destinations
                    <hr></hr>
                </div>
                <ul id="destination-list" className="unorder scroll">
                    {destinationsData
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
                    )}
                </ul>
            </div>
        </div>
    );
}