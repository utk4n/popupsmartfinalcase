import React from 'react'
import Exit from '../../assets/images/exit.svg';
import Bg from '../../assets/images/bg.svg';
import T from '../../assets/images/modals/Modal23/t.svg';
const Modal25 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[600px] flex items-center text-justify flex-col py-3 px-6 rounded-lg">
    <div className="flex justify-between w-full">
      <div className="flex items-center gap-3 ">
        <div className="relative flex items-center justify-center">
          <Bg className="fill-[#7D4AEA]" />
          <T className="absolute" />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-2xl">Reach and grow your audiennce</p>
          <p className="font-normal text-xl text-[#777777]">
            Build a better popup today.
          </p>
        </div>
      </div>
      <Exit />
    </div>
  </div>
  )
}

export default Modal25