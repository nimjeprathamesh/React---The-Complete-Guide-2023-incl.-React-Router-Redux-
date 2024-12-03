import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Form, redirect } from "react-router-dom";
import LoginPage from "../../components/Backend/LoginPage/LoginPage";
import { auth } from "../../util/firebaseConfig.jsx";

export default function SignIn() {
    return (
        <Form method="post" action="/admin/homepage">
            <LoginPage />
        </Form>
    );
}

export async function action({ request }) {
    try {
        const formData = new URLSearchParams(await request.text());
        const email = formData.get("username");
        const password = formData.get("password");

        await setPersistence(auth, browserSessionPersistence);

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        return redirect("/admin/homepage");
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Error signing in:", errorCode, errorMessage);

        return { errorCode, errorMessage };
    }
}