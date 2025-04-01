import { useState } from 'react';
import useLogIn from './../../Hooks/User/useLogIn';

const LogIn = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const onSubmit = (e) => {
        e.preventDefault();
        useLogIn(data);
    }

    const onInputChange = (e) => {
        setData({ [e.target.name]: e.target.value });
    }
    return (
        <div className="bg-slate-300 flex flex-col justify-center items-center w-full h-screen">
            <div className="w-3/12 px-12 py-6 bg-slate-400">
                <h3 className="text-3xl font-bold py-10">User Log In</h3>
                <form className='flex flex-col gap-10' onSubmit={onSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-indigo-800 text-lg font-medium">Email address</label>
                        <input type="email" name="email" placeholder="example@domain.com" className='border-b-2 focus:outline-0' onChange={onInputChange} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-indigo-800 text-lg font-medium">Password</label>
                        <input type="password" name="password" placeholder="Password" className='border-b-2 focus:outline-0' onChange={onInputChange} />
                    </div>
                    <div className="flex justify-center mt-1">
                        <button className='w-full py-3 px-5 rounded-full bg-indigo-500 text-white font-medium cursor-pointer'>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-3/12 flex flex-col px-12 py-5 gap-1 bg-slate-400/50 text-sm text-slate-600">
                <span>Don't have account? <a href="/user/signup" className="text-sky-800 hover:underline hover:decoration-sky-800">Create account</a></span>
                <span>Are you an admin? <a href="/admin/login" className="text-sky-800 hover:underline hover:decoration-sky-800">Log in as admin</a></span>
            </div>
        </div>
    )
}

export default LogIn;