import React from 'react';
import Image from 'next/image';
import Exit from '../../assets/images/exit.svg';
import Banner33 from '../../assets/images/modals/Modal33/33banner.png';
const Modal33 = () => {
  return (
    <div className="shadow-btnShadow h-[400px] w-[600px] grid grid-cols-2 py-4 px-3 rounded-lg ">
      <div>
        <Image src={Banner33} height={382} width={250} />
      </div>
      <div>
        <div className="flex justify-end w-full">
          <Exit />
        </div>
        <div className='flex flex-col gap-3 my-3'>
          <p className="font-bold text-4xl w-13">BE THE FIRST TO KNOW</p>
          <p className="font-normal text-lg">
            Sign up for email list and get our newest collection.
          </p>
        </div>
        <input
          type="text"
          className="template_content_input"
          placeholder="Enter your email address"
        />
        <div className="w-full flex items-center justify-center my-2 ">
          <button className="bg-primary w-full text-white font-medium px-4 py-2 my-2 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal33;
