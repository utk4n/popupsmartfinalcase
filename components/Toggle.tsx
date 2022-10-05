import React, { useState } from 'react';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkHandle = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className=" flex items-center">
      <div
        className="relative w-[33px] h-[18px] bg-primary rounded-[160px] p-1 flex items-center "
        onClick={checkHandle}
      >
        <input
          type="checkbox"
          className={`w-3 h-3  ${
            isChecked ? 'translate-x-[0.85rem]' : '-translate-x-[0.05rem]'
          } appearance-none bg-white rounded-full absolute transition-transform ease-linear duration-500 `}
        />
      </div>
    </div>
  );
};

export default Toggle;
