import React, { useState } from 'react';
import Image from 'next/image';

import Bg from '../../assets/images/bg.svg';
import Exit from '../../assets/images/exit.svg';
import Bin from '../../assets/images/modals/Modal4/bin.svg';
const Modal4 = () => {
  return (
    <div className="w-[350px] h-max bg-secondary py-3 px-4 rounded-lg">
      <div className=" flex items-end justify-end">
        <Exit />
      </div>

      <div className="flex items-center justify-center flex-col gap-2 mt-2">
        <p className="font-bold text-3xl">The file is on it`s way</p>
        <p className="font-normal text-xl text-center">
          You’ll get an notified when the receiver has opened the email.
        </p>
      </div>

      <div className="flex items-center flex-col justify-center mt-2 gap-3">
        <button className="bg-primary text-white rounded-lg w-full h-12">
          Go to dashboard
        </button>
      </div>
    </div>
  );
};

export default Modal4;
