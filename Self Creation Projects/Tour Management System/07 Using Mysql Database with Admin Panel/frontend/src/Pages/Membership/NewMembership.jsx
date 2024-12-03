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

    await fetch(BACKEND_URL + 'api/membershipdata', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../membership');
}