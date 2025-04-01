import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogIn from './../../Hooks/Admin/useLogIn';

const LogIn = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const { response } = useLogIn(data);

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        setData(userData);
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <div className="w-3/12 px-12 py-6 bg-slate-300">
                <h3 className="text-3xl font-bold py-10">Admin Log In</h3>
                <form className='flex flex-col gap-10' onSubmit={onSubmit}>
                    {
                        [
                            { label: 'Email address', type: 'email', name: 'email' },
                            { label: 'Password', type: 'password', name: 'password' }
                        ].map(({ label, type, name }) => {
                            return <div className="flex flex-col gap-2" key={name}>
                                <label className="text-indigo-800 text-lg font-medium">{label}</label>
                                <input type={type} name={name} className='border-b-2 focus:outline-0' />
                            </div>
                        })
                    }
                    <div className="flex justify-center mt-1">
                        <button type="submit" className='w-full py-3 px-5 rounded-full bg-indigo-500 hover:bg-indigo-500/80 text-white font-medium cursor-pointer'>
                            Log In
                        </button>
                    </div>
                </form>
            </div >
            <div className="w-3/12 flex flex-col px-12 py-5 gap-1 bg-slate-300/50 text-sm text-slate-600">
                <span>Don't have account? <a href="/admin/signup" className="text-sky-800 hover:underline hover:decoration-sky-800">Create account</a></span>
                <span>Not an admin? <a href="/user/login" className="text-sky-800 hover:underline hover:decoration-sky-800">Log in as user</a></span>
            </div>
        </div >
    )
}

export default LogIn;