import React from 'react';
import Image from 'next/image';

import Exit from '../../assets/images/exit.svg';
import ModalBgImage from '../../assets/images/modals/Modal2/bgImage.png';
const Modal2 = () => {
  return (
    <div className="w-[450px] h-[600px] py-3 px-4 rounded-lg">
      <div className=" flex relative flex-col">
        <div className=" absolute z-10 right-4 top-4">
          <Exit />
        </div>
        <Image src={ModalBgImage} height={300} width={300} />
      </div>

      <div className="flex items-center justify-center flex-col gap-3 mt-2">
        <p className="font-bold text-3xl">Install local now</p>
        <p className="font-normal text-xl">We’ve gone native, try it!</p>
      </div>

      <div className="flex items-center justify-center flex-col mt-4 gap-3">
        <button className="bg-primary text-white rounded-lg w-3/4 h-12">
          Continue
        </button>
        <button className="border bg-secondary border-[#D2DAE3] rounded-lg w-3/4 h-12 ">
          Not now
        </button>
      </div>
    </div>
  );
};

export default Modal2;
