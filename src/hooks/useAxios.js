import { useState, useEffect } from 'react'
import axios from 'axios';

axios.defaults.baseURL = "https://opentdb.com/"

export const useAxios = ({ url }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = () => {
            axios
                .get(url)
                .then(response => setResponse(response.data))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }
        fetchData();
    }, [url]);

    return { response, error, loading }
}
