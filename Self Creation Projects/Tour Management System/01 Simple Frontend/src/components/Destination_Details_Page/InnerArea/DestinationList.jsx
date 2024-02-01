import { useDestinationContext } from '../../../store/DestinationContext.jsx';
import { destinationsData } from '../../Dummy_Data/DestinationsData.jsx';
import Lists from '../../UI/Lists.jsx';
import './DestinationList.css';

export default function DestinationList() {
    const { excludeName } = useDestinationContext();

    return (
        <div className="desti-list">
            <h6>NEXT DESTINATION</h6>
            <hr className="hr-1"></hr>
            <hr className="hr-2"></hr>
            <ul>
                {destinationsData
                    .filter((destination) => destination.name !== excludeName)
                    .map((destination) => (
                        <Lists
                            key={destination.id}
                            to={`../destination/${destination.id}`}
                            children={destination.name}
                        />
                    )
                )}
            </ul>
        </div>
    );
}