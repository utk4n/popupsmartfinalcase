import React from 'react';
import Exit from '../../assets/images/exit.svg';
import Ring from '../../assets/images/modals/Modal19/ring.svg';
const Modal19 = () => {
  return (
    <div className="shadow-btnShadow h-max w-[350px] flex items-center text-justify flex-col py-3 px-3 rounded-lg">
      <div className="flex justify-end w-full">
        <Exit />
      </div>
      <div>
        <Ring />
      </div>
      <div className="text-center flex flex-col gap-3 mb-3">
        <p className="font-bold text-3xl">Reminders</p>
        <p className="font-normal text-lg text-center">
          How often would you like to be reminded to write?
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-2 w-full items-center justify-center">
        <button className="border w-3/4 py-2 rounded-lg font-medium border-[#7D4AEA] text-black">Daily</button>
        <button className="border w-3/4 py-2 rounded-lg font-medium border-[#7D4AEA] text-black">Weekly</button>
      </div>
      <p className="mt-3 font-medium">No Reminders</p>
    </div>
  );
};

export default Modal19;
