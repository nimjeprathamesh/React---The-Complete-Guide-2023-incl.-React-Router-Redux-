import React from 'react';
import { redirect, useLocation } from 'react-router-dom';
import DestinationForm from '../../components/Backend/DestinationPage/DestinationForm/DestinationForm.jsx';
import '../../components/Backend/addUpdateFile.css';
import { BACKEND_URL } from '../../util/constant.jsx';

export default function EditDestination() {
    const { state } = useLocation();
    const destination = state && state.destination;

    return (
        <DestinationForm method='patch' destination={destination} />
    );
}

export async function action({request, params}) {
    try {
        const formData = await request.formData();
        const postData = Object.fromEntries(formData);
        const formattedDate = new Date(postData.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        const uploadData = {
            date: formattedDate,
            name: postData.name,
            duration: postData.duration,
            details: postData.details,
            image: postData.image
        };

        if (!params.id) {
            throw new Error('Destination ID is missing');
        }

        const response = await fetch(
                `${BACKEND_URL}/destinationsData/${params.id}.json`, {
                method: 'PATCH',
                body: JSON.stringify(uploadData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to update destination');
        }

        return redirect('../destination');
    } catch (error) {
        console.error('Error updating destination:', error);
        return redirect('../destination');
    }
}