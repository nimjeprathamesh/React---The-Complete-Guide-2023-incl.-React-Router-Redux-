import { redirect, useLocation } from 'react-router-dom';
import DestinationForm from '../../components/Backend/DestinationPage/DestinationForm/DestinationForm.jsx';
import '../../components/Backend/addUpdateFile.css';
import { BACKEND_URL } from '../../util/constant.jsx';

export default function EditDestination() {
    const { state } = useLocation();
    const destination = state && state.destination;

    return (
        <DestinationForm method='put' destination={destination} />
    );
}

export async function action({request, params}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch(BACKEND_URL + 'api/destinationData/' + params.id, {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../destination');
}