import { redirect } from "react-router-dom";
import { BACKEND_URL } from "./constant.jsx";

export default async function combinedActions({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    let endpoint = BACKEND_URL + 'contactInfo';

    if ('mail' in postData && Object.keys(postData).length === 1) {
        endpoint = BACKEND_URL + 'subscription';
    }

    const submit = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(submit && ('mail' in postData && Object.keys(postData).length === 1)) {
        window.alert('You subscribed our website.');
    } else {
        window.alert('Form submitted successfully.');
    }

    return redirect('/');
}
