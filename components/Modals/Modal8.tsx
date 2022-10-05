import React, { useState } from 'react';
import Image from 'next/image';

import Exit from '../../assets/images/exit.svg';

const Modal8 = () => {
  return (
    <div className="w-[550px] h-max bg-primary py-3 pb-4 px-4 rounded-lg">
      <div className=" flex items-end justify-end">
        <Exit />
      </div>

      <div className="flex items-center justify-center flex-col gap-4 mt-2 w-max mx-auto">
        <p className="font-bold text-3xl text-white ">
          Subscribe to our newsletter
        </p>
        <p className="font-normal text-lg text-white">
          Receive the flash news in your inbox.
        </p>
      </div>
      <div className="flex items-center justify-center mt-3 flex-col">
        <input
          type="text"
          className="border outline-none py-2 px-3 rounded-lg border-dragDrop focus:border-contentFocus placeholder:font-normal placeholder:text-white text-base w-2/4 bg-transparent"
          placeholder="Enter your email"
        />
        <div className='flex items-center gap-2 mt-3'>
          <input
            type="radio"
            name=""
            id=""
            className="accent-primary outline-none border h-4 w-4"
          />
          <p className='text-xs text-slate-300'>By subscribe this form I agree to Privacy Policy.</p>
        </div>
      </div>
      <div className="flex w-3/4 mt-4 gap-3  justify-end ml-4">
        <button className="bg-secondary text-black rounded-lg px-8  h-10 text-base">
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Modal8;
