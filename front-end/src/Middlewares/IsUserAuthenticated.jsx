import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IsUserAuthenticated = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate('/user/home');
        }
        else {
            navigate('/user/login');
        }
    }, [])
    return (
        <></>
    )
}

export default IsUserAuthenticated;