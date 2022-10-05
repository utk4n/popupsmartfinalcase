import React, { useState } from 'react';
import Image from 'next/image';

import Exit from '../../assets/images/exit.svg';
import LetterBox from '../../assets/images/modals/Modal11/letterBox.svg';

const Modal11 = () => {
  return (
    <div className="w-[350px] h-max bg-secondary py-3 px-4 rounded-lg">
      <div className=" flex items-end justify-end">
        <Exit />
      </div>
      <div className="mx-auto relative w-max">
        <LetterBox className="mx-auto" />
      </div>
      <div className="flex items-center justify-center text-center flex-col gap-2 mt-2">
        <p className="font-bold text-3xl">Check your email</p>
        <p className="font-normal text-lg">
          Once you deletet your account, you’ll lose all data associatted with
          it.
        </p>
      </div>
      <input
        type="text"
        className="template_content_input my-4"
        placeholder="Enter your email"
      />
      <div className="flex items-start flex-col mt-2 gap-3 py-3">
        <button className="bg-primary text-white rounded-lg w-full h-12">
          Sign up
        </button>
        <p className="text-start">
          Already <span className="underline">have an account?</span>
        </p>
      </div>
    </div>
  );
};

export default Modal11;
