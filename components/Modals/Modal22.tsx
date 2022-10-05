import React from 'react';
import Exit from '../../assets/images/exit.svg';
import Image from 'next/image';
import Banner from '../../assets/images/modals/Modal22/22banner.png';
import ProfilePhoto from '../../assets/images/modals/Modal22/profilePhoto.png';
const Modal22 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[400px] flex items-center text-justify flex-col py-3 px-3 rounded-lg">
      <div className=" flex relative flex-col">
        <div className=" absolute z-10 right-4 top-4">
          <Exit />
        </div>
        <Image src={Banner} height={250} width={450} />
        <div className=" -translate-y-12 h-max w-max mx-auto">
          <Image src={ProfilePhoto} height={120} width={120} />
        </div>
        <div className="flex items-center justify-center flex-col -mt-10">
          <p className="font-bold text-lg">Jenny Yelriver</p>
          <p className="font-normal">Creative Director</p>
        </div>
        <div className="flex flex-col w-3/5 mx-auto mt-3 gap-3">
          <p className="font-bold text-lg w-full  text-center">
            5 reasons to purchase desktop computers
          </p>
          <p className="font-normal text-center">
            Our award winning templates are the most beautiful way to present
            your ideas online.
          </p>
        </div>
        <div className='w-full flex items-center justify-center mt-4 gap-3'>
            <button className='border font-medium px-4 py-2 rounded-lg'>Maybe Later</button>
            <button className='bg-primary text-white font-medium px-4 py-2 rounded-lg'>Read Article</button>
        </div>
      </div>
    </div>
  );
};

export default Modal22;
