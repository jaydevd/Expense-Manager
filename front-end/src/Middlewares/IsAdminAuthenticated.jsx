import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IsAdminAuthenticated = () => {
    const token = localStorage.getItem('admin');
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

export default IsAdminAuthenticated;