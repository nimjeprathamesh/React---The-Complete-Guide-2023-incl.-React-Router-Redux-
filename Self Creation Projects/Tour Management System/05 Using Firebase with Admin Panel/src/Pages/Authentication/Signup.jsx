import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Form, redirect } from "react-router-dom";
import LoginPage from "../../components/Backend/LoginPage/LoginPage";
import { auth } from "../../util/firebaseConfig.jsx"; // Correct import

export default function SignUp() {
    return (
        <Form method="post" action="/admin/signUp">
            <LoginPage />
        </Form>
    );
};

export async function action({ request }) {
    try {
        const formData = new URLSearchParams(await request.text());
        const email = formData.get("username");
        const password = formData.get("password");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        return redirect("/admin/signIn");
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Error creating user:", errorCode, errorMessage);

        return { errorCode, errorMessage };
    }
}