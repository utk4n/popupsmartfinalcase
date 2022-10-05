import React from 'react';
import Exit from '../../assets/images/exit.svg';
import ProfilePhoto from '../../assets/images/modals/Modal14/profilePhoto.svg';
const Modal14 = () => {
  return (
    <div className="w-[600px] h-max py-3 px-4 shadow-btnShadow rounded-lg">
      <div className="flex justify-end w-full">
        <Exit />
      </div>
      <div className="flex gap-3">
        <div>
          <ProfilePhoto />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div>
            <p className="font-bold text-2xl">Jenny Yelriver</p>
            <p className="text-[#777777] font-normal">@jennyyelriver</p>
          </div>
          <p className="font-normal mt-4">
            Duis eget elit erat. Aliam euismod, mauris quis tristique feugiat,
            elit diam tincidunt erat, nec fringilla odio orci dapibu magna.
            Vestibulum ultrices sem nec ex efficitur aliquam.
          </p>
          <div>
            <p className="text-sm font-normal text-[#777777] mt-4">
              10 SEP 2021 - 16:33 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal14;
