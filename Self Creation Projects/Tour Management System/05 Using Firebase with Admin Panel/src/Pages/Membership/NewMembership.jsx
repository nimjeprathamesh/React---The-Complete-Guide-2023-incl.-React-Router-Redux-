import React from 'react';
import { redirect } from 'react-router-dom';
import MembershipForm from "../../components/Backend/MembershipPage/MembershipForm/MembershipForm.jsx";
import { BACKEND_URL } from '../../util/constant.jsx';

export default function NewMembership() {
    return (
        <MembershipForm method='post' />
    );
}

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

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
        type: postData.type,
        location: postData.location,
        image: postData.image,
        price: postData.price
    };

    await fetch(BACKEND_URL + 'membershipsData.json', {
        method: 'POST',
        body: JSON.stringify(uploadData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../membership');
}