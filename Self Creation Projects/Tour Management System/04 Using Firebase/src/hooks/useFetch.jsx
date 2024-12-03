import { useCallback, useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const loadedData = [];

            for (const key in data) {
                loadedData.push({
                    id: key,
                    name: data[key].name,
                    title: data[key].title,
                    date: data[key].date,
                    image: data[key].image,
                    duration: data[key].duration,
                    details: data[key].details,
                    location: data[key].location,
                    price: data[key].price,
                    designation: data[key].designation,
                    feedback: data[key].feedback,
                    type: data[key].type
                });
            }

            setData(loadedData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error };
}
