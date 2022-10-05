import React from 'react';
import Logo from '../../assets/images/modals/Modal16/logo.svg';
import Bg from '../../assets/images/bg.svg';
import Exit from '../../assets/images/exit.svg';
const Modal16 = () => {
  return (
    <div className="w-[350px] h-[350px] flex flex-col gap-2 bg-secondary py-3 px-4 rounded-lg shadow-btnShadow">
      <div className=" flex items-end justify-end">
        <Exit />
      </div>
      <div className="mx-auto relative w-max">
        <Bg className="fill-[#7D4AEA]" />
        <Logo className="absolute top-[15%] right-[30%]" />
      </div>
      <div className="flex items-center justify-center flex-col gap-2 my-2">
        <p className="font-bold text-3xl">Hey there🥳</p>
        <p className="font-normal text-xl">We’re launching our product and
we would be happy to have you.</p>
      </div>
      <div className="flex items-center justify-center mt-auto mt-3 gap-3">
        <button className="bg-primary text-white rounded-lg w-full mt-3 h-12">
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Modal16;
