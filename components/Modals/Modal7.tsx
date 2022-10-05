import React, { useState } from 'react';
import Image from 'next/image';

import Exit from '../../assets/images/exit.svg';

const Modal7 = () => {
  return (
    <div className="w-[350px] h-max bg-primary py-3 pb-4 px-4 rounded-lg">
      <div className=" flex items-end justify-end">
        <Exit />
      </div>

      <div className="flex items-center justify-center flex-col gap-4 mt-2">
        <p className="font-bold text-3xl text-white">Hi, stranger</p>
        <p className="font-normal text-base text-white">
          Sign up now, and get a 30% discount
        </p>
      </div>

      <div className="flex items-center justify-center mt-4 gap-3">
        <button className="border  border-[#D2DAE3] text-white rounded-lg w-full h-12 text-base">
          Log In
        </button>
        <button className="bg-secondary text-black rounded-lg w-full h-12 text-base">
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Modal7;
