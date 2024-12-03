import React from 'react';
import { redirect } from 'react-router-dom';
import PackageForm from "../../components/Backend/PackagePage/PackageForm/PackageForm.jsx";
import { BACKEND_URL } from '../../util/constant.jsx';

export default function NewPackage() {
    return (
        <PackageForm method='post' />
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
        title: postData.title,
        location: postData.location,
        duration: postData.duration,
        details: postData.details,
        price: postData.price,
        image: postData.image
    };

    await fetch(BACKEND_URL + 'packagesData.json', {
        method: 'POST',
        body: JSON.stringify(uploadData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../package');
}