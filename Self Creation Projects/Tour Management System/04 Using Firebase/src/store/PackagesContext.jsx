import { createContext, useContext, useEffect, useState } from 'react';

const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
    const [excludeName, setExcludeName] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const storedExcludeName = localStorage.getItem('excludeName');
        if (initialLoad) {
            if (!storedExcludeName || storedExcludeName !== excludeName) {
                localStorage.setItem('excludeName', excludeName || '');
            }
            setInitialLoad(false);
        }
    }, [excludeName, initialLoad]);

    const setExcludedName = (title) => {
        setExcludeName(title);
    };

    return (
        <PackageContext.Provider value={{ excludeName, setExcludedName }}>
            {children}
        </PackageContext.Provider>
    );
};

export const usePackageContext = () => {
    return useContext(PackageContext);
};
