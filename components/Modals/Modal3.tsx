import React, { useState } from 'react';
import Image from 'next/image';

import Exit from '../../assets/images/exit.svg';
import ModalBgImage from '../../assets/images/modals/Modal2/bgImage.png';

const Modal3 = () => {
  const [radioControl, setRadioControl] = useState(0);

  const [radio, setRadio] = useState([
    {
      id: 1,
      title: 'Starter',
      info: '1 free (then $15 per meember / month)',
    },
    {
      id: 2,
      title: 'Pro',
      info: '$19 per member/month',
    },
    {
      id: 3,
      title: 'Business',
      info: '$29 per member/month',
    },
  ]);
  const content = radio.map((item) => (
    <div key={item.id} className="mt-4">
      <div className="flex items-center gap-2">
        <input
          onClick={() => setRadioControl(item.id)}
          type="radio"
          checked={radioControl === item.id}
          className="accent-primary h-4 w-4"
        />
        <p className="text-base font-medium">{item.title}</p>
      </div>
      <p className="font-normal text-[#717791] text-sm ml-6">{item.info}</p>
    </div>
  ));
  return (
    <div className="w-[450px] h-[600px] py-3 px-4 rounded-lg">
      <div className=" flex relative flex-col">
        <div className="flex items-end justify-end">
          <Exit />
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <p className="text-primary font-medium">PLANS</p>
          <p className="font-bold text-3xl">Choose best for you</p>
          <p className="text-xl">Only pay for the capacity that you use.</p>
        </div>
      </div>
      <div className="py-2 px-4">{content}</div>
      <div className="flex items-center justify-center mt-4 gap-3">
        <button className="border bg-secondary border-[#D2DAE3] rounded-lg w-full h-12 ">
          Cancel
        </button>
        <button className="bg-primary text-white rounded-lg w-full h-12">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal3;
