import React from 'react'
import Exit from '../../assets/images/exit.svg';
import ThickLogo from '../../assets/images/modals/Modal31/thick.svg';
const Modal31 = () => {
  return (
    <div className="shadow-btnShadow  h-max w-[400px] flex flex-col py-4 px-8 rounded-lg">
      <div className=" flex flex-col gap-3">
        <div className="flex justify-end w-full">
          <Exit />
        </div>
        <div className="flex items-center w-full gap-3 flex-col">
          <ThickLogo />
          <div className='flex flex-col gap-3'>
            <p className="text-3xl">Good job, <strong>Jenny</strong></p>
            <p className="text-xl font-normal">Your profile is created!</p>
          </div>
        </div>
        
        
        <div className="w-full flex items-center justify-center mt-4 gap-3 flex-col">
          <button className="bg-primary w-2/4 mx-auto text-white font-medium px-4 py-2 rounded-lg">
          Go to my profile
          </button>
          <p className='font-medium text-base'>Go to Home</p>
        </div>
      </div>
    </div>
  )
}

export default Modal31