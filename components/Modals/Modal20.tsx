import React from 'react'
import Exit from '../../assets/images/exit.svg';
import Flag from '../../assets/images/modals/Modal20/flag.svg';
import Arrow from '../../assets/images/modals/Modal20/arrow.svg';
const Modal20 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[350px] flex items-center text-justify flex-col py-3 px-3 rounded-lg">
    <div className="flex justify-end w-full">
      <Exit />
    </div>
    <div className='mt-3'>
      <Flag />
    </div>
    <div className="text-center flex flex-col gap-3 my-3">
      <p className="font-bold text-3xl">Don’t miss out</p>
      <p className="font-normal text-lg text-center">
      Allow notifications get free ebook.
      </p>
    </div>
    <div className="flex flex-col gap-2 mt-2 w-full items-center justify-center">
     <Arrow />
    </div>

  </div>
  )
}

export default Modal20