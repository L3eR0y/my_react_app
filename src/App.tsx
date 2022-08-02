import React from 'react';
import { BrowserRouter as Router , Routes, Link} from 'react-router-dom';
import './App.css';
import { ProductsList } from './components/ProductsList';

function App() {
  return (
    <div className='w-screen h-screen flex'>
      <div className='w-1/6 flex flex-col border-r p-5'>
        <div className="border my-1 py-6 px-4 rounded-xl col-10 text-center">HOME</div>
        <div className="border my-1 py-6 px-4 rounded-xl col-10 text-center">STORE</div>
        <div className="border my-1 py-6 px-4 rounded-xl col-10 text-center">CART</div>
        <div className="border my-1 py-6 px-4 rounded-xl col-10 text-center">ABOUT</div>
      </div>
      <div className='w-5/6 flex flex-col items-center'>
        <ProductsList products={[]} />
      </div>
    </div>
  );
}

export default App;
