import React from 'react';
import Exit from '../../assets/images/exit.svg';
import Face from '../../assets/images/modals/Modal34/face.svg';
import Pint from '../../assets/images/modals/Modal34/pinterest.svg';
import Tw from '../../assets/images/modals/Modal34/tw.svg';
const Modal34 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[450px] flex flex-col py-4 px-8 rounded-lg">
      <div className=" flex flex-col gap-3">
        <div className="flex justify-end w-full">
          <Exit />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-3">
          <p className="font-bold text-3xl">Share this page</p>
          <p className="text-xl font-normal text-center">
            If you liked this page you can share it on your social media.
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-4 gap-3">
          <div className="bg-[#1977F2] w-full flex items-center py-2 rounded-md px-2">
            <Face />
            <p className="text-center w-full text-white">Facebook</p>
          </div>
          <div className="bg-[#E60022] w-full flex items-center py-2 rounded-md px-2">
            <Pint />
            <p className="text-center w-full text-white">Pinterest</p>
          </div>
          <div className="bg-[#1E9BF0] w-full flex items-center py-2 rounded-md px-2">
            <Tw />
            <p className="text-center w-full text-white">Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal34;
