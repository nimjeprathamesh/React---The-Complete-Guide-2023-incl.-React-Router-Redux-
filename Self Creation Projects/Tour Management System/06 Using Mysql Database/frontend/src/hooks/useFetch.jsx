import { useEffect, useState } from "react";
import { BACKEND_URL } from "../util/constant";

export default function useFetch({url}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(BACKEND_URL + 'api/' + url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return data;
};