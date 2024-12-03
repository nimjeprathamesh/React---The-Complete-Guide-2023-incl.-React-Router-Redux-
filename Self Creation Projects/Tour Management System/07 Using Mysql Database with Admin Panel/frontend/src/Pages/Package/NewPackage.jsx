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

    await fetch(BACKEND_URL + 'api/packagesdata', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../package');
}