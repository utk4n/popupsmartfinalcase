import React, { useState } from 'react';
import Image from 'next/image';

import Bg from '../../assets/images/bg.svg';
import Exit from '../../assets/images/exit.svg';
import PercentageLogo from '../../assets/images/modals/Modal6/percentage.svg';

const Modal6 = () => {
  return (
    <div className="w-[350px] h-max bg-secondary py-3 px-4 rounded-lg">
      <div className=" flex items-end justify-end">
        <Exit />
      </div>
      <div className="mx-auto relative w-max">
        <PercentageLogo className="mx-auto" />
      </div>
      <div className="flex items-center justify-center flex-col gap-2 mt-2">
        <p className="font-bold text-3xl">Join our mail list</p>
        <p className="font-normal text-lg">
        Save up to 30% of your next order
        </p>
      </div>
<input type="text" className='template_content_input my-4' placeholder='Enter your email'/>
      <div className="flex items-center justify-center mt-2 gap-3">
        <button className="border bg-secondary border-[#D2DAE3] rounded-lg w-full h-12">
          Cancel
        </button>
        <button className="bg-primary text-white rounded-lg w-full h-12">
        Join now
        </button>
      </div>
    </div>
  );
};

export default Modal6;
