import { redirect } from 'react-router-dom';
import DestinationForm from "../../components/Backend/DestinationPage/DestinationForm/DestinationForm.jsx";
import { BACKEND_URL } from '../../util/constant.jsx';

export default function NewDestination() {
    return (
        <DestinationForm method='post' />
    );
}

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch(BACKEND_URL + 'api/destinationData', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../destination');
}