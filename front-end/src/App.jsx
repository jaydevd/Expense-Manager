import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="w-10/12 bg-neutral-300 flex justify-between mx-auto">
        <div className="w-1/2">
          <div className="w-1/2">
            <span className="inline-block text-3xl font-medium my-3">
              Welcome!
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates deserunt magnam earum nostrum placeat sed dignissimos iure? Repudiandae, nemo culpa beatae eaque eveniet officia eligendi vitae facere hic nihil! Eligendi?
            </p>
          </div>
        </div>
        <div className="w-1/2">

        </div>
      </div>
    </>
  )
}

export default App;