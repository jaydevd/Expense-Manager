import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignUp from '../../Hooks/Admin/useSignUp';

const SignUp = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate();

    const { response } = useSignUp(data);
    console.log(response);

    if (response) {
        navigate('/admin/home');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        setData(userData);
    }

    return (
        <div className="bg-slate-300 flex flex-col justify-center items-center w-full h-screen">
            <div className="w-3/12 px-12 py-6 bg-slate-400">
                <h3 className="text-3xl font-bold py-10">Admin Sign Up</h3>
                <form className='flex flex-col gap-10' onSubmit={onSubmit}>
                    {
                        [
                            { label: 'Full Name', type: 'text', name: 'name' },
                            { label: 'Email address', type: 'text', name: 'email' },
                            { label: 'Password', type: 'password', name: 'password' }
                        ].map(({ label, type, name }) => {
                            return <div className="flex flex-col gap-2" key={name}>
                                <label className="text-indigo-800 text-lg font-medium">{label}</label>
                                <input type={type} name={name} className='border-b-2 focus:outline-0 bg-transparent' />
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
                <span>Already having account? <a href="/admin/login" className="text-sky-800 hover:underline hover:decoration-sky-800">Log in from here</a></span>
                <span>Not an admin? <a href="/user/signup" className="text-sky-800 hover:underline hover:decoration-sky-800">Sign up as user</a></span>
            </div>
        </div >
    )
}

export default SignUp;