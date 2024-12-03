import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem('authenticated');
        if (storedAuth !== null && storedAuth !== undefined) {
            setAuthenticated(JSON.parse(storedAuth));
        }
    }, []);

    function login() {
        setAuthenticated(true);
        localStorage.setItem('authenticated', JSON.stringify(true));
    };

    function logout() {
        setAuthenticated(false);
        localStorage.removeItem('authenticated');
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
