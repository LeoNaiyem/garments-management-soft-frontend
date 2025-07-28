import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="bg-primary text-4xl text-secondary p-4 ">
          Hello with custom colors!
        </div>
       
      </div>
      <p className="read-the-docs text-2xl">
        Click on the Vite and React logos to learn more
      </p>
      <button className="btn uppercase">custom</button>
    </>
  );
}

export default App
