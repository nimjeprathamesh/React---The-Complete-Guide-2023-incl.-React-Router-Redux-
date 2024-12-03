import { redirect } from "react-router-dom";
import { url } from "./constants.jsx";

export default async function combinedActions({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    let endpoint = url + 'contactInfo.json';

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    let data = {
        id: generateRandomString(10),
        name: postData.name,
        email: postData.email,
        subject: postData.subject,
        message: postData.message
    };

    if ('mail' in postData && Object.keys(postData).length === 1) {
        endpoint = url + 'subscription.json';
        data = {
            id: generateRandomString(10),
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
