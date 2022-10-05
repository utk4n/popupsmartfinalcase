import React from 'react';
import Exit from '../../assets/images/exit.svg';
import Image from 'next/image';
import Bg from '../../assets/images/bg.svg';
import T from '../../assets/images/modals/Modal23/t.svg';
const Modal23 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[480px] flex items-center text-justify flex-col py-3 px-3 rounded-lg">
      <div className="flex w-full ">
        <div className="relative flex items-center  justify-center flex-2 w-full">
          <Bg className="fill-[#7D4AEA]" />
          <T className="absolute" />
        </div>
        <div className="flex w-full border mt-auto items-end justify-end flex-1">
          <Exit />
        </div>
      </div>
      <div className="flex items-cnter justify-center flex-col gap-3 mt-3">
        <p className="font-bold text-3xl text-center">
          Do you like our design?
        </p>
        <p className="font-normal text-xl text-center">
          Help us to improve it.
        </p>
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <div className="flex flex-col">
          <p className="border flex-col rounded-full text-center w-14 h-14 flex items-center justify-center">
            🥳
          </p>
          <p className="font-medium text-center text-[ #777777]">Cool</p>
        </div>
        <div className="flex flex-col">
          <p className="border flex-col rounded-full text-center w-14 h-14 flex items-center justify-center">
            😊
          </p>
          <p className="font-medium text-center text-[ #777777]">Not Bad</p>
        </div>
        <div className="flex flex-col">
          <p className="border flex-col rounded-full text-center w-14 h-14 flex items-center justify-center">
            😋
          </p>
          <p className="font-medium text-center text-[ #777777]">Average</p>
        </div>
        <div className="flex flex-col">
          <p className="border flex-col rounded-full text-center w-14 h-14 flex items-center justify-center">
            🤗
          </p>
          <p className="font-medium text-center text-[ #777777]">Good</p>
        </div>
        <div className="flex flex-col">
          <p className="border flex-col rounded-full text-center w-14 h-14 flex items-center justify-center">
            ☹️
          </p>
          <p className="font-medium text-center text-[ #777777]">Bad</p>
        </div>
      </div>
    </div>
  );
};

export default Modal23;
