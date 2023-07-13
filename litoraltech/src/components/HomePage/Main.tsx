import React from 'react';
import Description from './Description';
import AboutUs from './AboutUs';
import Header from '../Header';


const Main = () => {
    
  return (
    
    <main className="flex flex-col bg-[url('/paisagem.gif')] bg-contain">
        <Header/>
        <Description/>
        <div className="absolute h-[15rem] top-[80vh] w-full md:h-[40vh] bg-[url('/Vector.svg')] bg-cover lg:top-[70vh]"></div>
        <AboutUs/>
    </main>
    
  );
};

export default Main;
