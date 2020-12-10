import React from 'react';
import Nav from './Nav'
// import '../styling/header.css'

const Header = () => {
  return (
    <header className = 'bg-gray-800 flex-initial'>
      <div className='text'>        
    <h1 className='text-2xl text-yellow-50'>Muscle-Masons</h1>
    <h3>You are the marble and the sculptor</h3>
      </div>
    <Nav />
  </header>
  );
};

export default Header;