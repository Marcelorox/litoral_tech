import React, { ReactComponentElement } from 'react';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';

interface Props {
    
}

const Header: React.FC<Props> = () => {
  return (
    <header className='flex flex-col p-5 bg-[#101010] md:flex-row md:justify-between'>
      <div className='flex justify-center md:block'>
        <Image src='/logoTech.svg' alt="Logo" width={200} height={200} />
      </div>
      <div className='flex px-4 bg-[#0085FF] items-center rounded gap-2 cursor-pointer justify-center h-10 mt-5 md:mt-0'>
        <span><FaUser/></span>
        <span className='font-bold'>Área do cliente</span>
      </div>
    </header>
  );
};

export default Header;