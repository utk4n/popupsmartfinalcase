import React, { useState } from 'react';
import Image from 'next/image';

import Exit from '../../assets/images/exit.svg';
import BgImage from '../../assets/images/modals/Modal9/bgImage.png';
const Modal9 = () => {
  return (
    <div className="w-[450px] h-max bg-secondary py-3 pb-4 px-4 rounded-lg">
      <div className=" flex relative flex-col">
        <div className=" absolute z-10 right-4 top-4">
          <Exit />
        </div>
        <Image src={BgImage} height={300} width={450} />
      </div>

      <div className='px-4 flex flex-col gap-3'>
        <div className="flex items-center justify-center flex-col gap-4 mt-2 w-max mx-auto">
          <p className="font-bold text-3xl text-black ">Hello stranger</p>
          <p className="font-normal text-lg text-black">
            Sign up now and get 30% discount
          </p>
        </div>
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

        <button className="bg-primary h-9 text-white rounded-lg w-full">
          Sign up
        </button>
        <p>
          Already <span className="underline">have an account?</span>
        </p>
      </div>
    </div>
  );
};

export default Modal9;
