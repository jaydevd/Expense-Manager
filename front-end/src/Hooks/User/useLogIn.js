import axios from 'axios';
import { useEffect, useState } from 'react';

const useLogIn = async ({ email, password }) => {
    const [data, setData] = useState({
        email: email,
        password: password
    });

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await axios.post("http://localhost:5000/admin/login", data);
            setData(res.data.data);
        }
        fetchAPI();
    }, [])

    return data;
}

export default useLogIn;