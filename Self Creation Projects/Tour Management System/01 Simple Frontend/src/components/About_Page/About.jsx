import { destinationsData } from '../Dummy_Data/DestinationsData.jsx';
import './About.css';
import AboutHeader from './AboutHeader/AboutHeader.jsx';
import AboutDestinationContent from './InnerArea/AboutDestinationContent.jsx';
import InnerArea from './InnerArea/InnerArea.jsx';

export default function About() {
    return (
        <>
            <AboutHeader />
            <section id="description_page">
                <InnerArea />
                <div className="dest-area">
                    <h1>DESTINATION FOR THE CLIENT.</h1>
                    <hr className="horizontal"></hr>
                    <div className="row dest-details">
                        {destinationsData.map((destination, index) => (
                            <AboutDestinationContent
                                key={index}
                                id={destination.id}
                                imgSrc={destination.image}
                                name={destination.name}
                                duration={destination.duration}
                                details={destination.details}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}