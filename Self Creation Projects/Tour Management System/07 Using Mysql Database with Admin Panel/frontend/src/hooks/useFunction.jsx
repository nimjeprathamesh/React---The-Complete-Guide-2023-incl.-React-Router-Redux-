import { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import ContactInfo from '../components/Backend/HomePage/ContactInfo.jsx';
import Subscription from '../components/Backend/HomePage/Subscription.jsx';
import { BACKEND_URL } from '../util/constant.jsx';

export default function useFunction() {
    const { feedback, subscribe } = useLoaderData();
    const [displayComponent, setDisplayComponent] = useState(null);
    const [feedbackList, setFeedbackList] = useState(feedback);
    const [subscriptionList, setSubscriptionList] = useState(subscribe);

    function handleButtonClick(component) {
        setDisplayComponent(component);
    };

    async function handleDeleteSubscription(subscriptionId) {
        const url = BACKEND_URL + 'api/subscription/' + subscriptionId;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to delete destination:', errorMessage);
            return;
        }
        setSubscriptionList(prevSubscription => prevSubscription.filter(
            subscribe => subscribe.id === subscriptionId
        ));
    }

    async function handleDeleteContact(contactId) {
        const url = BACKEND_URL + 'api/contactinfo/' + contactId;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to delete destination:', errorMessage);
            return;
        }
        setFeedbackList(prevFeedback => prevFeedback.filter(contact => contact.id !== contactId));
    }

    useEffect(() => {
        setDisplayComponent(
            <ContactInfo feedback={feedbackList} onDelete={handleDeleteContact} />
        );
        <Subscription subscribe={subscriptionList} onDelete={handleDeleteSubscription} />
    }, [feedbackList, subscriptionList]);

    return {
        feedback,
        subscribe,
        displayComponent,
        handleButtonClick,
        handleDeleteSubscription,
    };
}
