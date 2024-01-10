
import { useState, useEffect } from "react";

const useFetch = ( (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {

        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if(!response.ok){
                        throw Error('Failed to fetch data from the resouce');
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) =>{
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000)
    }, [url]);
    
    return { data, setData, isPending, error }
})

export default useFetch