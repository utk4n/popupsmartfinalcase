import React, { useState } from 'react';
import Image from 'next/image';

import Bg from '../../assets/images/bg.svg';
import Exit from '../../assets/images/exit.svg';
import Bin from '../../assets/images/modals/Modal4/bin.svg';
const Modal4 = () => {
  return (
    <div className="w-[350px] h-[350px] bg-secondary py-3 px-4 rounded-lg">
      <div className=" flex items-end justify-end">
        <Exit />
      </div>
      <div className="mx-auto relative w-max">
        <Bg className="fill-[#7D4AEA]" />
        <Bin className="absolute top-[30%] left-[35%]" />
      </div>
      <div className="flex items-center justify-center flex-col gap-2 mt-2">
        <p className="font-bold text-3xl">Delete your profile</p>
        <p className="font-normal text-xl text-center">
          Your profile will be automatically deleted after 1 month.
        </p>
      </div>
      <div className="flex items-center text-center mt-4 mb-4">
        <p>
          You won’t be able to access to your profile after
          <strong>30.08.2021</strong>.
        </p>
      </div>
      <div className="flex items-center flex-col justify-center mt-2 gap-3">
        <button className="bg-primary text-white rounded-lg w-full h-12">
          Delete my profile
        </button>
        <button className="border bg-secondary border-[#D2DAE3] rounded-lg w-full h-12">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal4;
