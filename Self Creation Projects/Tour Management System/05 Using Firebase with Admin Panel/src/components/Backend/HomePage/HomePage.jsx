import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiBell, FiFileText } from 'react-icons/fi';
import useFunction from '../../../hooks/useFunction.jsx';
import ContactInfo from "./ContactInfo.jsx";
import './HomePage.css';
import Subscription from "./Subscription.jsx";

export default function HomePage() {
    const {feedbackArray, subscribeArray, displayComponent, handleButtonClick, handleDeleteSubscription} = useFunction();

    return (
        <section id="homePage">
            <div className="row table_container">
                <div className="col-md-6 homeTable">
                    <Button
                        className={`
                            btn-btn-success tabBtn
                            ${displayComponent && displayComponent.type === ContactInfo ? 'activeBtn' : ''}
                        `}
                        onClick={() => handleButtonClick(<ContactInfo feedback={feedbackArray} />)}
                    >
                        <Icon position='relative' bottom='0.1rem' right='0.3rem' as={FiFileText} />Feedback
                    </Button>
                </div>
                <div className="col-md-6 homeTable">
                    <Button
                        className={`
                            btn-btn-success tabBtn subBtn
                            ${displayComponent && displayComponent.type === Subscription ? 'activeBtn' : ''}
                        `}
                        onClick={() => handleButtonClick(
                            <Subscription subscribe={subscribeArray} onDelete={handleDeleteSubscription} />
                        )}
                    >
                        <Icon position='relative' bottom='0.1rem' right='0.2rem' as={FiBell} />Subscription
                    </Button>
                </div>
            </div>
            {displayComponent && (
                <div className="row">
                    {displayComponent}
                </div>
            )}
        </section>
    );
}
