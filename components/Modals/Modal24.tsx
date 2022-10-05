import React from 'react';
import Exit from '../../assets/images/exit.svg';
import Bg from '../../assets/images/bg.svg';
import T from '../../assets/images/modals/Modal23/t.svg';

const Modal24 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[480px] flex items-center text-justify flex-col py-3 px-6 rounded-lg">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-3 ">
          <div className="relative flex items-center justify-center">
            <Bg className="fill-[#7D4AEA]" />
            <T className="absolute" />
          </div>
          <p className="font-bold text-primary text-2xl">tailwind</p>
        </div>
        <Exit />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <p className="font-bold text-3xl">
          Learn, share and connect with our community.
        </p>
        <p className="font-normal text-xl">
          Explore our amazing products curated by our team just for you.
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <button className="text-white bg-primary w-2/4 px-3 py-2 rounded-lg font-medium">
          Join the club
        </button>
        <button className="w-2/4 px-3 py-2 rounded-lg font-medium">
          Maybe Later
        </button>
      </div>
    </div>
  );
};

export default Modal24;
