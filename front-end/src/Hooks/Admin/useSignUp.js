import axios from 'axios';
import { useEffect, useState } from 'react';

const useSignUp = (data) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (!data) {
            console.log("No data found");
            return;
        }

        const fetchAPI = async () => {
            try {
                console.log("fetching api");
                const res = await axios.post("http://localhost:5000/admin/signup", { data });
                console.log(res);
                setResponse(res.data.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchAPI();
    }, [data]);

    return { response };
}

export default useSignUp;