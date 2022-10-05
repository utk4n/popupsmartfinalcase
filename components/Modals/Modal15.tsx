import React from 'react';
import Exit from '../../assets/images/exit.svg';

const Modal15 = () => {
  return (
    <div className="w-[400px] h-full shadow-btnShadow rounded-lg py-3 px-3">
      <div className="flex justify-end w-full">
        <Exit />
      </div>
      <div>
        <p className="font-bold text-3xl text-center">Let’s feedback</p>
      </div>
      <div className="flex gap-3 py-3 items-center justify-center mt-2">
        <p className="flex items-center justify-center border rounded-full h-14 w-14 text-center mx-auto text-2xl">
          😶
        </p>
        <p className="flex items-center justify-center border rounded-full h-14 w-14 text-center mx-auto text-2xl">
          ☹️
        </p>
        <p className="flex items-center justify-center border rounded-full h-14 w-14 text-center mx-auto text-2xl">
          🤗
        </p>
        <p className="flex items-center justify-center border rounded-full h-14 w-14 text-center mx-auto text-2xl">
          😄
        </p>
      </div>
    </div>
  );
};

export default Modal15;
