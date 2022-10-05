import React from 'react';
import Image from 'next/image';
import Exit from '../../assets/images/exit.svg';
import PP28 from '../../assets/images/modals/Modal28/pp28.png';
const Modal28 = () => {
  return (
    <div className="shadow-btnShadow border-t-8 border-t-primary h-max w-[450px] flex flex-col py-4 px-8 rounded-lg">
      <div className=" flex flex-col gap-3">
        <div className="flex justify-end w-full">
          <Exit />
        </div>
        <div className="flex items-center w-full gap-3">
          <Image src={PP28} height={60} width={60} />
          <div>
            <p className="text-xl font-bold">Jenny Yelriver</p>
            <p className="text-base">Creative Director</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className="font-bold text-3xl">
            Start your 14-day free trial today and shine.
          </p>
          <p className="text-xl font-normal">
            If you’re looking for a new way to promote your business that won’t
            cost you money.
          </p>
        </div>
        <input type="text" className='template_content_input' placeholder='Enter your email address'/>
        <div className="w-full flex items-center justify-center mt-4 gap-3">
          <button className="bg-primary w-full text-white font-medium px-4 py-2 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal28;
