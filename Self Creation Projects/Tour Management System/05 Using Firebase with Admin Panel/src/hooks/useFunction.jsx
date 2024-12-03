import { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import ContactInfo from '../components/Backend/HomePage/ContactInfo.jsx';
import Subscription from '../components/Backend/HomePage/Subscription.jsx';

export default function useFunction() {
    const { feedback, subscribe } = useLoaderData();
    const feedbackArray = Object.entries(feedback).map(([key, value]) => ({ ...value, key }));
    const subscribeArray = Object.entries(subscribe).map(([key, value]) => ({ ...value, key }));
    const [displayComponent, setDisplayComponent] = useState(null);
    const [feedbackList, setFeedbackList] = useState(feedbackArray);
    const [subscriptionList, setSubscriptionList] = useState(subscribeArray);

    function handleButtonClick(component) {
        setDisplayComponent(component);
    };

    function handleDeleteSubscription(subscriptionId) {
        setSubscriptionList(prevSubscription => prevSubscription.filter(
            subscribe => subscribe.id === subscriptionId
        ));
    }

    function handleDeleteContact(contactId) {
        setFeedbackList(prevFeedback => prevFeedback.filter(contact => contact.id !== contactId));
    }

    useEffect(() => {
        setDisplayComponent(<ContactInfo feedback={feedbackList} onDelete={handleDeleteContact} />);
        <Subscription subscribe={subscriptionList} onDelete={handleDeleteSubscription} />
    }, [feedbackList, subscriptionList]);

    return {
        feedbackArray,
        subscribeArray,
        displayComponent,
        handleButtonClick,
        handleDeleteSubscription,
    };
}
