import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch data from the resource');
                }
                const jsonData = await response.json();

                setData(jsonData);
                setIsPending(false);
                setError(null);
            } catch (err) {
                setError(err.message);
                setIsPending(false);
            }
        };

        setTimeout(fetchData, 1000);
    }, [url]);

    return { data, setData, isPending, error };
};

export default useFetch;
