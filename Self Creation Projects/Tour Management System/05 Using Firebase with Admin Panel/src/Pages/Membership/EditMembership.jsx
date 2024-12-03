import React from 'react';
import { redirect, useLocation } from 'react-router-dom';
import MembershipForm from '../../components/Backend/MembershipPage/MembershipForm/MembershipForm.jsx';
import '../../components/Backend/addUpdateFile.css';
import { BACKEND_URL } from '../../util/constant.jsx';

export default function EditMembership() {
    const { state } = useLocation();
    const membership = state && state.membership;

    return (
        <MembershipForm method='patch' membership={membership} />
    );
}

export async function action({request, params}) {
    try {
        const formData = await request.formData();
        const postData = Object.fromEntries(formData);

        const uploadData = {
            type: postData.type,
            location: postData.location,
            image: postData.image,
            price: postData.price
        };

        if (!params.id) {
            throw new Error('membership ID is missing');
        }

        const response = await fetch(
                `${BACKEND_URL}/membershipsData/${params.id}.json`, {
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

        return redirect('../membership');
    } catch (error) {
        console.error('Error updating package:', error);
        return redirect('../membership');
    }
}