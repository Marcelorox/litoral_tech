import React from 'react';
import Description from './Description';
import AboutUs from './AboutUs';
import Header from '../Header';


interface Props {
    
}

const Main: React.FC<Props> = () => {
    
  return (
    
    <main className="flex flex-col bg-[url('/paisagem.png')] bg-cover">
        <Header/>
        <Description/>
        <div className="absolute h-[15rem] top-[80vh] md:top-[83vh] w-full md:h-60 bg-[url('/Vector.svg')] bg-cover"></div>
        <AboutUs/>
    </main>
    
  );
};

export default Main;
