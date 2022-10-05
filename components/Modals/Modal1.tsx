import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/images/modals/Modal1/logo.svg';
import Bg from '../../assets/images/bg.svg';
import Exit from '../../assets/images/exit.svg';
const Modal1 = () => {
  return (
    <div className="w-[350px] h-[350px] bg-secondary py-3 px-4 rounded-lg">
      <div className=" flex items-end justify-end">
        <Exit />
      </div>
      <div className="mx-auto relative w-max">
        <Bg className="fill-[#7D4AEA]" />
        <Logo className="absolute top-[25%] right-[30%]" />
      </div>
      <div className="flex items-center justify-center flex-col gap-2 mt-2">
        <p className="font-bold text-3xl">Security Code</p>
        <p className="font-normal text-xl">This code expires in 24 hours</p>
      </div>
     <input type="text" className='w-full template_content_input my-4' placeholder="Code"/>
      <div className="flex items-center justify-center mt-2 gap-3">
        <button className="border bg-secondary border-[#D2DAE3] rounded-lg w-full h-12">
          Cancel
        </button>
        <button className="bg-primary text-white rounded-lg w-full h-12">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal1;
