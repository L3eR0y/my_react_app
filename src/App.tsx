import React from 'react';
import { BrowserRouter as Router , Routes, Route, Link, useNavigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {
  const navigate = useNavigate();

  function onNavigateClick(path: string){
    if (path) navigate(path)
  }

  return (
    <div className='w-screen h-screen flex'>
      <div className='w-1/6 flex flex-col border-r p-5'>
        <div className="border my-1 py-6 px-4 rounded-xl col-10 text-center bg-sky-600 hover:bg-sky-700 font-bold text-white" 
          onClick={ (e)=>{ onNavigateClick('/') } }>HOME</div>
        <div className="border my-1 py-6 px-4 rounded-xl col-10 text-center bg-sky-600 hover:bg-sky-700 font-bold text-white" 
          onClick={ (e)=>{ onNavigateClick('/store') } }>STORE</div>
        <div className="border my-1 py-6 px-4 rounded-xl col-10 text-center bg-sky-600 hover:bg-sky-700 font-bold text-white" 
          onClick={ (e)=>{ onNavigateClick('/cart') } }>CART</div>
        <div className="border my-1 py-6 px-4 rounded-xl col-10 text-center bg-sky-600 hover:bg-sky-700 font-bold text-white" 
          onClick={ (e)=>{ onNavigateClick('/about') } }>ABOUT</div>
      </div>
      <div className='w-5/6 flex justify-center p-5 max-h-screen overflow-y-auto overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        {/* <ProductsList products={[]} /> */}
      </div>
    </div>
  );
}

export default App;
