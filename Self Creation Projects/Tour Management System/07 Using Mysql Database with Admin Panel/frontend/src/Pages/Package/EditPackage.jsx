import { redirect, useLocation } from 'react-router-dom';
import PackageForm from '../../components/Backend/PackagePage/PackageForm/PackageForm.jsx';
import '../../components/Backend/addUpdateFile.css';
import { BACKEND_URL } from '../../util/constant.jsx';

export default function EditPackages() {
    const { state } = useLocation();
    const packages = state && state.packages;

    return (
        <PackageForm method='put' packages={packages} />
    );
}

export async function action({request, params}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch(BACKEND_URL + 'api/packagesdata/' + params.id, {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../package');
}