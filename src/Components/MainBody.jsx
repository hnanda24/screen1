import React, { useState } from 'react';
import RightBody from './RightBody';
import { LeftBody } from './LeftBody';

const MainBody = () => {
  

  return (
    <div className='bodyContainer w-[85vw]'>
        <div className='w-full text-black text-[36px] px-16 py-4 shadow-md fixed top-0 font-bold'>Complete Profile</div>
        <div className=' main flex w-[80%] justify-evenly h-[90%] items-center'>
          <LeftBody/>
          <RightBody/>
          </div>
    </div>

        
  );
}

export default MainBody;
