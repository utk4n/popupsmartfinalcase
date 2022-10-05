import React from 'react';
import Exit from '../../assets/images/exit.svg';
import Image from 'next/image';
import Banner from '../../assets/images/modals/Modal26/26banner.png';
import Bg from '../../assets/images/bg.svg';
import T from '../../assets/images/modals/Modal23/t.svg';
const Modal26 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[400px] flex items-center text-justify flex-col py-3 px-3 rounded-lg">
      <div className=" flex relative flex-col">
        <div className=" absolute z-10 right-4 top-4">
          <Exit />
        </div>
        <Image src={Banner} height={250} width={450} />
        <div className=" -translate-y-12 h-max w-max mx-auto">
          <div className="relative flex items-center justify-center">
            <Bg className="fill-[#7D4AEA]" />
            <T className="absolute" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col -mt-10">
          <p className="font-bold text-lg">OVERVIEW</p>
        </div>
        <div className="flex flex-col w-full mx-auto mt-3 gap-3">
          <p className="font-bold text-2xl w-full text-center">
            Welcome to onboarding
          </p>
          <p className="font-normal text-center">
            Our award winning templates are the most beautiful way to present
            your ideas online.
          </p>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-colorOption3 w-3 h-3 rounded-full"></div>
            <div className="bg-colorOption3 w-3 h-3 rounded-full"></div>
            <div className="bg-primary w-3 h-3 rounded-full"></div>
            <div className="bg-colorOption3 w-3 h-3 rounded-full"></div>
            <div className="bg-colorOption3 w-3 h-3 rounded-full"></div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-4 gap-3">
          <button className="border font-medium px-4 py-2 rounded-lg">
            Maybe Later
          </button>
          <button className="bg-primary text-white font-medium px-4 py-2 rounded-lg">
            Connect now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal26;
