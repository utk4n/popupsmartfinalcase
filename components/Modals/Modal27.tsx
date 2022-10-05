import React from 'react';
import Exit from '../../assets/images/exit.svg';
const Modal27 = () => {
  return (
    <div className="shadow-btnShadow border-t-8 border-t-primary h-max w-[400px] flex items-center text-justify flex-col py-3 px-3 rounded-lg">
      <div className=" flex relative flex-col">
        <div className="flex justify-end w-full">
          <Exit />
        </div>
        <div className="flex flex-col w-full mx-auto mt-3 gap-3">
          <p className="font-bold text-3xl text-center">
            Get straight to growing your business well
          </p>
          <p className="text-xl font-normal text-center">
            There’s good news for parents who have child born.
          </p>
        </div>
        <div className="flex gap-3 flex-col mt-2">
          <input
            className="template_content_input"
            type="text"
            placeholder="Enter your email address"
          />
          <input
            className="template_content_input"
            type="number"
            placeholder="Enter your phone"
          />
        </div>
        <div className="w-full flex items-center justify-center mt-4 gap-3">
          <button className="bg-primary w-full text-white font-medium px-4 py-2 rounded-lg">
            Sign up
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p>I have an account</p>
          <p>Forgot Password</p>
        </div>
      </div>
    </div>
  );
};

export default Modal27;
