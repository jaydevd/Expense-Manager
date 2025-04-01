import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ showHome }) => {
    const navigate = useNavigate();
    const [isHome, setIsHome] = useState(true);
    return (
        <nav className="flex justify-between px-40 py-3 text-white bg-blue-950">
            <div className="order-1 text-xl font-bold flex items-center">Expense Manager</div>
            <div className="order-2">
                <ul className="flex gap-10 items-center">
                    {
                        showHome &&
                        <li className={`cursor-pointer ${isHome ? "text-yellow-500" : "text-white"} hover:text-amber-300 duration-150`}>Home</li>
                    }
                    <li>
                        <button onClick={() => navigate('/user/login')} className="border-2 border-indigo-400 text-indigo-400 font-medium rounded-md px-4 py-2 cursor-pointer hover:bg-indigo-400 hover:text-white duration-100">Log in</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;