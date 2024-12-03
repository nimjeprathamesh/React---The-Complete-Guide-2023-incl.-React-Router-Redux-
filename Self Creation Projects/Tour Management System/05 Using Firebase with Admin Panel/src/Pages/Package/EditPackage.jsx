import React from 'react';
import { redirect, useLocation } from 'react-router-dom';
import PackageForm from '../../components/Backend/PackagePage/PackageForm/PackageForm.jsx';
import '../../components/Backend/addUpdateFile.css';
import { BACKEND_URL } from '../../util/constant.jsx';

export default function EditPackages() {
    const { state } = useLocation();
    const packages = state && state.packages;

    return (
        <PackageForm method='patch' packages={packages} />
    );
}

export async function action({request, params}) {
    try {
        const formData = await request.formData();
        const postData = Object.fromEntries(formData);

        const uploadData = {
            title: postData.title,
            duration: postData.duration,
            details: postData.details,
            image: postData.image,
            price: postData.price,
            location: postData.location
        };

        if (!params.id) {
            throw new Error('Package ID is missing');
        }

        const response = await fetch(
                `${BACKEND_URL}/packagesData/${params.id}.json`, {
                method: 'PATCH',
                body: JSON.stringify(uploadData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to update package');
        }

        return redirect('../package');
    } catch (error) {
        console.error('Error updating package:', error);
        return redirect('../package');
    }
}