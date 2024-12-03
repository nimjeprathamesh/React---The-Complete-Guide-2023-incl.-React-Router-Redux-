import { redirect, useLocation } from 'react-router-dom';
import MembershipForm from '../../components/Backend/MembershipPage/MembershipForm/MembershipForm.jsx';
import '../../components/Backend/addUpdateFile.css';
import { BACKEND_URL } from '../../util/constant.jsx';

export default function EditMembership() {
    const { state } = useLocation();
    const membership = state && state.membership;

    return (
        <MembershipForm method='put' membership={membership} />
    );
}

export async function action({request, params}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch(BACKEND_URL + 'api/membershipdata/' + params.id, {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../membership');
}