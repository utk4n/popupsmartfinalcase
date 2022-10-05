import React, { useEffect, useState } from 'react';
import BrowserLanguage from '../components/BrowserLanguage';
import SelectDevice from '../components/SelectDevice';
import Toggle from '../components/Toggle';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { autoClose, afterPercentage } from '../redux/modalSlice';
import Link from 'next/link';
const Targetingrules = () => {
  const modalClose = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const autoCloseHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(autoClose(parseInt(inputValue)));
  };

  const closePercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(afterPercentage(parseInt(inputValue)));
  };

  console.log(modalClose);

  return (
    <div className=" w-[80%] mx-auto ">
      <div className="grid grid-cols-2 mt-16">
        <div className="w-2/3 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[18px] ">
            <p className="bg-textBg font-semibold rounded-full w-9 h-9 flex items-center justify-center">
              4
            </p>
            <p className="font-semibold">Targeting Rules</p>
          </div>

          <div>
            <div className="flex justify-between">
              <p className="font-semibold font-poppins text-sm">
                Visitor Device
              </p>
              <Toggle />
            </div>
            <SelectDevice />
            <div>
              <div className="flex justify-between mt-4">
                <p className="font-semibold font-poppins text-sm">
                  After X seconds
                </p>
                <Toggle />
              </div>
              <input
                onChange={autoCloseHandle}
                type="text"
                name="autoClose"
                className="mt-3 font-poppins text-sm template_content_input"
                placeholder="12"
              />
            </div>
            <div>
              <div className="flex justify-between mt-4">
                <p className="font-semibold font-poppins text-sm">
                  After % Scroll
                </p>
                <Toggle />
              </div>
              <input
                onChange={closePercentage}
                type="text"
                className="mt-3 font-poppins text-sm template_content_input"
                placeholder="50"
              />
            </div>
            <div>
              <div className="flex justify-between mt-4">
                <p className="font-semibold font-poppins text-sm">
                  Traffic Source
                </p>
                <Toggle />
              </div>
              <input
                type="text"
                className="mt-3 template_content_input placeholder:text-slate-500 font-poppins placeholder:font-normal text-sm"
                placeholder="Enter your traffic source domain"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <div className="flex justify-between mt-4">
                <p className="font-semibold font-poppins text-sm">
                  Browser Language
                </p>
                <Toggle />
              </div>
              <BrowserLanguage />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="font-semibold font-poppins text-sm">
                Exit Intent Targeting
              </p>
              <Toggle />
            </div>
          </div>
        </div>
        <div className=" border border-black">
          <div className="flex items-center">Preview</div>
        </div>
      </div>
      <div className='flex items-center justify-between mt-3'>
      <Link href="/content">
        <a className="bg-primary text-white py-2 px-4 rounded-lg w-max">Back</a>
      </Link>
      <Link href="/settingsandcode">
        <a className="bg-primary text-white py-2 px-4 rounded-lg w-max">Next</a>
      </Link>
      </div>
    </div>
  );
};

export default Targetingrules;
