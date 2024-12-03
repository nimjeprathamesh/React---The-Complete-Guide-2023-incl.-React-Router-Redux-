import { redirect } from "react-router-dom";
import { BACKEND_URL } from "./constant.jsx";

export default async function combinedActions({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    let endpoint = BACKEND_URL + 'contactInfo.json';
    let data = {
        id: Math.random().toString(),
        name: postData.name,
        email: postData.email,
        subject: postData.subject,
        message: postData.message
    };

    if ('mail' in postData && Object.keys(postData).length === 1) {
        endpoint = BACKEND_URL + 'subscription.json';
        data = {
            id: Math.random().toString(),
            email: postData.mail
        };
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.ok && ('mail' in postData && Object.keys(postData).length === 1)) {
        window.alert('You subscribed our website.');
    } else {
        window.alert('Form submitted successfully.');
    }

    return redirect('/');
}
