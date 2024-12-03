import React from 'react';
import { redirect } from 'react-router-dom';
import DestinationForm from "../../components/Backend/DestinationPage/DestinationForm/DestinationForm.jsx";
import { BACKEND_URL } from '../../util/constant.jsx';

export default function NewDestination() {
    return (
        <DestinationForm method='post' />
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    const formattedDate = new Date(postData.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    const uploadData = {
        id: generateRandomString(10),
        date: formattedDate,
        name: postData.name,
        duration: postData.duration,
        details: postData.details,
        image: postData.image
    };

    await fetch(BACKEND_URL + 'destinationsData.json', {
        method: 'POST',
        body: JSON.stringify(uploadData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../destination');
}