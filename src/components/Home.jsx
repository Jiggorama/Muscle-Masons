import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-700 bg-gradient-to-br from-gray-600 via-gray-400 min-h-full h-screen p-2 flex flex-col">
      <h1 className='text-4xl sm:text-6xl lg:text-8xl text-center pt-4 lg:pt-8 text-orange-400' >Muscle-Masons</h1>
      <div className='h-4/5 flex flex-col justify-between max-w-screen-xl self-center sm:mt-16'>
      <div className ='mt-4'>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 sm:ml-16">
          Exercise and Fitness Inspiration <br /> At your fingertips
        </h2>
        <ul className="text-center text-yellow-50 mt-2 sm:mt-12 sm:leading-relaxed lg:text-xl " >
          <li>Extensive list of exercises</li>
          <li>View and edit exercise details</li>
          <li>Create custome routines</li>
          <li>Add new exercises to our evergrowing list</li>
        </ul>
        </div>
        <div className='w-auto self-center text-xl lg:text-2xl bg-gray-700 p-4 rounded-md text-orange-400 hover:bg-orange-400 hover:text-gray-700 border-4 border-gray-700 hover:border-gray-700'>
      <Link to="/exercise-list">
        <button>Get Started</button>
      </Link>
        </div>
      <div className='w-3/5 self-end mr-2 sm:mr-16 sm:text-lg lg:text-xl'>
        <p className='text-right leading-tight'>
          "Strength does not come from winning. Your struggles develop your
          strengths. When you go through hardships and decide not to surrender,
          that is strength."
          <br /><span className='leading-relaxed'>- Arnold Schwarzenegger</span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Home;
