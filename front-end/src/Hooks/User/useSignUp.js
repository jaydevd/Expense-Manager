import axios from 'axios';
import { useEffect, useState } from 'react';

const useSignUp = async ({ name, email, password }) => {
    const [data, setData] = useState({
        name: name,
        email: email,
        password: password
    });

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await axios.post("http://localhost:5000/admin/signup", data);
            setData(res.data.data);
        }
        fetchAPI();
    }, [])

    return data;
}

export default useSignUp;