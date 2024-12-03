import React from "react";
import { Form, redirect } from "react-router-dom";
import LoginPage from "../../components/Backend/LoginPage/LoginPage";
import { BACKEND_URL } from "../../util/constant";

export default function SignUp() {
    return (
        <Form method="post" action="/admin/signUp">
            <LoginPage />
        </Form>
    );
};

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    try {
        const response = await fetch(BACKEND_URL + 'api/signup', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return redirect('/admin/signIn');
    } catch (error) {
        console.error('Failed to submit form:', error);
        throw error;
    }
}
