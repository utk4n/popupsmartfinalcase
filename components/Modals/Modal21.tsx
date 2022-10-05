import React from 'react';
import Exit from '../../assets/images/exit.svg';
import DarkModeIcon from '../../assets/images/modals/Modal21/darkModeIcon.svg';
import Env from '../../assets/images/modals/Modal21/env.svg';
import Eye from '../../assets/images/modals/Modal21/eye.svg';
const Modal21 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[480px] flex items-center text-justify flex-col py-3 px-3 rounded-lg">
      <div className="flex justify-end w-full">
        <Exit />
      </div>
      <div className="my-3">
        <DarkModeIcon />
      </div>
      <div className="text-center flex flex-col items-center justify-center gap-3 my-3 mt-3 px-4">
        <p className="font-bold text-3xl">Dark mode</p>
        <p className="font-normal text-lg text-center w-2/3">
          Just letting you know that we have dark mode.
        </p>
      </div>
      <div className="flex gap-3 flex-col w-full items-center px-4">
        <div className="flex gap-2">
          <Eye />
          <div className="flex flex-col flex-1 gap-2">
            <p className="font-bold text-lg">Eye relief</p>
            <p className="font-normal">
              With dark mode you won’t be giving your eyes shock in the morning.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Env />
          <div className="flex flex-col flex-1 gap-2">
            <p className="font-bold text-lg">Eye relief</p>
            <p className="font-normal">
              With dark mode you won’t be giving your eyes shock in the morning.
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col px-4 gap-2 mt-3'>
        <button className='bg-primary w-full text-white py-2 rounded-lg'>Turn on dark mode</button>
        <button className='border w-full py-2 rounded-lg'>Keep using light mode</button>
      </div>
    </div>
  );
};

export default Modal21;
