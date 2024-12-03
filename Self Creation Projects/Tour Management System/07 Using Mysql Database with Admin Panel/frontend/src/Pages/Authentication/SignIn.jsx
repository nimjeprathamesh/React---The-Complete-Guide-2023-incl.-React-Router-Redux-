import React from "react";
import { Form, redirect } from "react-router-dom";
import LoginPage from "../../components/Backend/LoginPage/LoginPage";

export default function SignIn() {
    return (
        <Form method="post" action="/admin/homepage">
            <LoginPage />
        </Form>
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    try {
        const response = await fetch(BACKEND_URL + 'api/signin', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/admin/homepage');
        } else {
            console.error('Sign-in failed');
        }
    } catch (error) {
        console.error('Failed to submit form:', error);
        return redirect('/admin/signIn'); // Redirect to sign-in page on error
    }
}