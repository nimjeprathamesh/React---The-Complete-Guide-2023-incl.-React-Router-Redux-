import { createContext, useContext, useEffect, useState } from 'react';

const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
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

    const setExcludedName = (name) => {
        setExcludeName(name);
    };

    return (
        <DestinationContext.Provider value={{ excludeName, setExcludedName }}>
            {children}
        </DestinationContext.Provider>
    );
};

export const useDestinationContext = () => {
    return useContext(DestinationContext);
};
