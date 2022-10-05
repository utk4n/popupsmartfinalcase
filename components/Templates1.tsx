import Link from 'next/link';
import React from 'react';
import ImgUpload from '../assets/images/imgupload.svg';
import ImgUploadCloud from '../assets/images/imgupcloud.svg';
// import styles from '../../../styles/alltempappereance.module.scss';
const Templates1 = () => {
  return (
    <div className=" w-[80%] mx-auto ">
      <div className="grid grid-cols-2 mt-16">
        <div className="w-2/3 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[18px] ">
            <p className="bg-textBg font-semibold rounded-full w-9 h-9 flex items-center justify-center">
              2
            </p>
            <p>
              <span className="font-semibold">Appereance </span>(Size, colors,
              logo)
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Size</p>
            <div className="flex items-center justify-evenly px-2 bg-secondary text-sizeBtn w-64 h-12 font-semibold gap-5 rounded-xl text-[14px]">
              <button>Small</button>
              <button>Medium</button>
              <button>Large</button>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <p>Position</p>
            <div className="grid grid-cols-3 w-1/4 gap-y-1 gap-x-0.5">
              <button className="border border-gridBorder w-6 h-4 rounded-tl-lg"></button>
              <button className="border border-gridBorder w-6 h-4 "></button>
              <button className="border border-gridBorder w-6 h-4 rounded-tr-lg"></button>
              <button className="border border-gridBorder w-6 h-4 "></button>
              <button className="border border-gridBorder w-6 h-4 bg-primary"></button>
              <button className="border border-gridBorder w-6 h-4 "></button>
              <button className="border border-gridBorder w-6 h-4 rounded-bl-lg"></button>
              <button className="border border-gridBorder w-6 h-4 "></button>
              <button className="border border-gridBorder w-6 h-4 rounded-br-lg"></button>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <p>Colors</p>
            <div className="flex gap-3">
              <button className="border border-colorOptions bg-black w-10 h-10 rounded-lg"></button>
              <button className="border border-colorOptions bg-colorOption1 w-10 h-10 rounded-lg"></button>
              <button className="border border-colorOptions bg-colorOption2 w-10 h-10 rounded-lg"></button>
              <button className="border border-colorOptions bg-colorOption3 w-10 h-10 rounded-lg"></button>
              <button className="border border-colorOptions bg-white w-10 h-10 rounded-lg"></button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Upload Logo</p>
            <div className="border border-dashed border-dragDrop rounded-xl bg-white flex items-center justify-center flex-col gap-3 py-5">
              <div className="bg-secondary w-20 h-20 flex items-center justify-center rounded-xl">
                <ImgUpload />
              </div>
              <div className="flex items-center gap-1">
                <ImgUploadCloud />
                <p>Drop your image here or</p>
                <p className="text-primary underline"> upload</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-black">
          <div className="flex items-center">Preview</div>
        </div>
      </div>
    </div>
  );
};

export default Templates1;
