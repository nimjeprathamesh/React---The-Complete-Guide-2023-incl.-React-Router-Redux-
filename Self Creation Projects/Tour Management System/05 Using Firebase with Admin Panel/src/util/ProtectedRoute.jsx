import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from 'react-router-dom';
import BackendCommon from '../components/Backend/Common/Common.jsx';
import { auth } from "./firebaseConfig.jsx";

function ProtectedRoute() {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error occurred: {error.message}</div>;
    }

    if (!user) {
        return <Navigate to="/admin/signIn" />;
    }

    return (
        <BackendCommon>
            <Outlet />
        </BackendCommon>
    );
}

export default ProtectedRoute;