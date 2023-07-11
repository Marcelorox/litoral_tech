import React from 'react';
import Description from './Description';
import AboutUs from './AboutUs';
import Header from '../Header';


const Main = () => {
    
  return (
    
    <main className="flex flex-col bg-[url('/paisagem.gif')] bg-contain">
        <Header/>
        <Description/>
        <div className="absolute h-[15rem] top-[80vh] md:top-[83vh] w-full md:h-60 bg-[url('/Vector.svg')] bg-cover"></div>
        <AboutUs/>
    </main>
    
  );
};

export default Main;
