import React, { useState } from 'react';
import Image from 'next/image';

import Exit from '../../assets/images/exit.svg';
import BgImage from '../../assets/images/modals/Modal10/bgImage.png';
const Modal10 = () => {
  return (
    <div className="w-[700px] h-max bg-secondary py-3 pb-4 px-4 rounded-lg grid grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-4 px-5">
        <div className=' flex flex-col gap-4 items-start w-full'>
          <p className="font-bold text-4xl">Sign up</p>
          <p className="font-normal text-2xl">Join new adventure</p>
        </div>
        <div className='flex items-start flex-col gap-3 my-5 w-full'>
          <input
            type="text"
            className="template_content_input"
            placeholder="Enter Full name"
          />
          <input
            type="text"
            className="template_content_input"
            placeholder="Enter your email"
          />
        </div>
        <button className="bg-primary py-3 rounded-lg w-full text-white">Sign up</button>
        <div className="flex items-center justify-between text-sm w-full mt-3">
          <p>Forgot password</p>
          <p>Log In</p>
        </div>
      </div>
      <div>
        <div className="relative">
          <Exit className='absolute right-4 top-4 z-10'/>
          <Image src={BgImage} height={443} width={350} objectFit="contain" alt='img'/>
        </div>
      </div>
    </div>
  );
};

export default Modal10;
