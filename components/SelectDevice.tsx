import { useState } from 'react';
import DesktopImg from '../assets/images/desktop.svg';
import MobileImg from '../assets/images/mobile.svg';
import ThickImg from '../assets/images/thick.svg';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { selectDevice } from '../redux/modalSlice';
const SelectDevice = () => {
  const [device, setDevice] = useState('desktop');
  const dispatch = useAppDispatch();
  const deviceHandle = (select: any) => {
    setDevice(select);
    dispatch(selectDevice(device));
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <div
        onClick={() => deviceHandle('desktop')}
        className="flex items-center justify-start bg-secondary w-44 h-12 rounded-xl gap-3 cursor-pointer"
      >
        <div
          className={`w-[18px] h-[18px] border border-inputCheck ${
            device === 'desktop' ? 'bg-primary' : 'fill-[#999999]'
          } rounded-md ml-2 relative flex items-center justify-center`}
        >
          <ThickImg
            className={`w-[9.9px] h-[7.54px] absolute my-auto ${
              device === 'desktop' ? 'block' : 'hidden'
            }`}
          />
        </div>

        <DesktopImg
          className={`${
            device === 'desktop' ? 'fill-[#7D4AEA]' : 'fill-[#999999]'
          }`}
        />
        <p className="font-poppins font-normal text-sm">Desktop</p>
      </div>
      <div
        onClick={() => deviceHandle('mobile')}
        className="flex items-center  bg-secondary w-44 h-12 rounded-xl gap-3 cursor-pointer"
      >
        <div
          className={`w-[18px] h-[18px] border border-inputCheck ${
            device === 'mobile' ? 'bg-primary' : 'fill-[#999999]'
          } rounded-md ml-2 relative flex items-center justify-center`}
        >
          <ThickImg
            className={`w-[9.9px] h-[7.54px] absolute my-auto ${
              device === 'mobile' ? 'block' : 'hidden'
            }`}
          />
        </div>
        <MobileImg
          className={`${
            device === 'mobile' ? 'fill-[#7D4AEA]' : 'fill-[#999999]'
          }`}
        />
        <p className="font-poppins font-normal text-sm">Mobile</p>
      </div>
    </div>
  );
};

export default SelectDevice;
