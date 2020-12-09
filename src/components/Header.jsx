import React from 'react';
import Nav from './Nav'
import '../styling/header.css'

const Header = () => {
  return (
    <header className = 'bg-gray-400 bg-gradient-to-br from-gray-600 via-gray-200'>
      <div className='text'>        
    <h1>Muscle-Masons</h1>
    <h3>You are the marble and the sculptor</h3>
      </div>
    <Nav/>
  </header>
  );
};

export default Header;