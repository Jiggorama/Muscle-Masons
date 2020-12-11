import React from 'react';
import {Link} from 'react-router-dom'

const Four = () => {
  return (
    <div className='flex flex-col items-center justify-evenly'>
                         
    <h3 className="text-center mt-4">You're on the wrong page!</h3>
    <img
      className="h-44 w-44 mt-8"
          src="https://media1.tenor.com/images/467d353f7e2d43563ce13fddbb213709/tenor.gif?itemid=12136175"
          alt="rick astley rolling"
        />
    <br />
      <Link
        className='bg-teal-300 rounded-full p-2'
        to="/">Go back home!</Link>
      <p className="text-2xl text-center mt-4">THANKS SOLEIL! <br /> Its been a blast!</p>
      <img
        className="h-44 w-44 mt-8"
        src="https://ca.slack-edge.com/T0351JZQ0-UD75VKWKU-d4add3c6acdf-512"
        alt="soleil"
      />
    
    </div>
  );
};

export default Four;