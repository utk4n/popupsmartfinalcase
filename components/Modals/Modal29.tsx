import React from 'react';
import Image from 'next/image';
import Exit from '../../assets/images/exit.svg';
import Banner29 from '../../assets/images/modals/Modal29/29banner.png';
const Modal29 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[650px] grid grid-cols-2 py-4 px-8 rounded-lg ">
      <div>
        <Image src={Banner29} height={370} width={250}/>
      </div>
      <div >
        <div className="flex justify-end w-full">
          <Exit />
        </div>
        <div>
          <p className="font-bold text-4xl w-4 my-2">LOVE NATURE?</p>
          <p className="font-normal text-lg my-2">
            Mauris feugiat egestas at llus tur pis massa, gravidez rum sit
            ameta.
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

export default Modal29;
