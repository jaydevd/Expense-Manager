import { useState } from 'react';
import useSignUp from './../../Hooks/User/useSignUp';

const SignUp = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        useSignUp(data);
    }

    const onInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div className="bg-slate-300 flex flex-col justify-center items-center w-full h-screen">
            <div className="w-3/12 px-12 py-6 bg-slate-400">
                <h3 className="text-3xl font-bold py-10">User Sign Up</h3>
                <form className='flex flex-col gap-10' onSubmit={onSubmit}>
                    {
                        [
                            { label: 'Full Name', type: 'text', name: 'name' },
                            { label: 'Email address', type: 'text', name: 'email' },
                            { label: 'Password', type: 'password', name: 'password' }
                        ].map(({ label, type, name }) => {
                            return <div className="flex flex-col gap-2" key={name}>
                                <label className="text-indigo-800 text-lg font-medium">{label}</label>
                                <input type={type} name={name} placeholder="example@domain.com" className='border-b-2 focus:outline-0' onChange={onInputChange} />
                            </div>
                        })
                    }
                    <div className="flex justify-center mt-1">
                        <button className='w-full py-3 px-5 rounded-full bg-indigo-500 hover:bg-indigo-500/80 text-white font-medium cursor-pointer'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div >
            <div className="w-3/12 flex flex-col px-12 py-5 gap-1 bg-slate-400/50 text-sm text-slate-600">
                <span>Already having account? <a href="/user/login" className="text-sky-800 hover:underline hover:decoration-sky-800">Log in from here</a></span>
                <span>Are you an admin? <a href="/admin/signup" className="text-sky-800 hover:underline hover:decoration-sky-800">Sign up as Admin</a></span>
            </div>
        </div >
    )
}

export default SignUp;