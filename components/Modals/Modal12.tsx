import React, { useState } from 'react';
import Image from 'next/image';

import Exit from '../../assets/images/exit.svg';
import BgImage from '../../assets/images/modals/Modal12/bgImage.png';
const Modal12 = () => {
  return (
    <div className="w-[550px] h-[563px] bg-secondary py-4 px-4 rounded-lg relative ">
      <Image src={BgImage} height={563} width={550} objectFit="contain"/>
      <div className='flex flex-col gap-3 absolute top-[20%] translate-x-80 bg-white shadow-btnShadow pt-2 rounded-xl px-8 w-[340px] h-[353px]'>
        <div className='flex justify-end w-full'>
        <Exit />
        </div>
        <div className='flex flex-col gap-3'>
          <p className="text-4xl font-bold">Sign up</p>
          <p className="text-2xl">Join new adventure</p>
        </div>
        <div className='flex flex-col gap-3'>
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
        <button className='w-full bg-primary text-white py-2 rounded-lg'>Sign Up</button>
        <div className="flex items-center justify-between text-sm w-full mt-3">
          <p>Forgot password</p>
          <p>Log In</p>
        </div>
      </div>
    </div>
  );
};

export default Modal12;
