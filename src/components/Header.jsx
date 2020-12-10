import React from 'react';
import Nav from './Nav'
// import '../styling/header.css'

const Header = () => {
  return (
    <header className = 'bg-coolGray-800 bg-gradient-to-br from-coolGray-800 via-gray-600 flex-initial flex flex-col lg:flex-row lg:justify-between'>
      <div className='m-4 sm:ml-8'>        
    <h1 className='text-2xl sm:text-4xl text-orange-400 md:text-6xl'>Muscle-Masons</h1>
    <h3 className='text-l sm:text-xl md:text-3xl lg:ml-8 text-gray-100'>You are the marble and the sculptor</h3>
      </div>
    <Nav />
  </header>
  );
};

export default Header;