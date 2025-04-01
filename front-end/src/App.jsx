import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>
      <Navbar showHome={false} />
      <div className="w-full flex justify-center items-center mx-auto bg-[url('/images/hero-image.jpg')] bg-origin-padding bg-cover bg-left-bottom h-[92vh]">
        <div className="w-10/12 flex flex-col gap-5 px-10">
          <span className="inline-block text-4xl font-medium">
            Welcome!
          </span>
          <p className="text-xl/8 w-5/12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates deserunt magnam earum nostrum placeat sed dignissimos iure? Repudiandae, nemo culpa beatae eaque eveniet officia eligendi vitae facere hic nihil! Eligendi?
          </p>
          <button
            className='w-fit text-lg px-4 py-2 rounded-md bg-indigo-700 hover:bg-indigo-600 text-white cursor-pointer duration-150'
            onClick={() => navigate('/user/signup')}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default App;