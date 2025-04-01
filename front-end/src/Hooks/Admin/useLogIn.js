import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const useLogIn = (data) => {
    const [response, setResponse] = useState(null);
    // const navigate = useNavigate();
    useEffect(() => {
        if (!data) return;
        const fetchAPI = async () => {
            try {
                console.log("useLogIn: ", data);
                const res = await axios.post("http://localhost:5000/admin/login", data);
                const token = res.data.data;
                console.log(token);

                localStorage.setItem("admin", token);
                setResponse(res.data.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchAPI();
    }, [data])

    return { response };
}

export default useLogIn;