import React from 'react'
import Exit from '../../assets/images/exit.svg';
import NotFoundImg from '../../assets/images/modals/Modal32/notFound.svg';
const Modal32 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[450px] flex flex-col py-4 px-8 rounded-lg">
      <div className=" flex flex-col gap-3">
        <div className="flex justify-end w-full">
          <Exit />
        </div>
        <div className="flex items-center justify-center w-full">
          <NotFoundImg />
        </div>
        <div className='flex flex-col items-center justify-center gap-4 mt-3'>
          <p className="font-bold text-3xl">
          Opps
          </p>
          <p className="text-xl font-normal">
          Page not found
          </p>
        </div>
        
        <div className="w-full flex items-center justify-center mt-4 gap-3">
          <button className="border w-full text-black text-lg font-normal px-4 py-2 rounded-lg">
          Back to home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal32