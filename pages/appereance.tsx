import Link from 'next/link';
import React, { useState } from 'react';
import ImgUpload from '../assets/images/imgupload.svg';
import ImgUploadCloud from '../assets/images/imgupcloud.svg';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import Image from 'next/image';
import {
  setModalColor,
  setModalSize,
  setModalPosition,
  imgPath,
} from '../redux/modalSlice';
import Position from '../components/Position';

// import styles from '../../../styles/alltempappereance.module.scss';
const Appereance = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal.size);
  const [sizeOpt, setSizeOpt] = useState(modal);

  const [imageSrc, setImageSrc] = useState<any>();
  const [uploadData, setUploadData] = useState();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent: any) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: any) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event: any) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput: any = Array.from(form.elements).find(
      ({ name }: any) => name === 'file'
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'my-uploads');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dmj5gby5e/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
    dispatch(imgPath(uploadData));
  }
  const sizeHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | any
  ) => {
    const btnValue = e.target.value;
    if (btnValue === 'small') setSizeOpt('small');
    dispatch(setModalSize('w-[18.75rem] h-[18.75rem]'));
    if (btnValue === 'medium') setSizeOpt('medium');
    dispatch(setModalSize('w-[25rem] h-[25rem]'));
    if (btnValue === 'large') setSizeOpt('large');
    dispatch(setModalSize('w-[31.25rem] h-[31.25rem]'));
  };

  const positionHandle = (position1: string, position2?: string) => {
    const targetNameValue = `${position1} ${position2}`;
    dispatch(setModalPosition(targetNameValue));
  };

  return (
    <div className=" w-[80%] mx-auto flex flex-col gap-4">
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
              <button
                className={`px-3 py-2 ${
                  sizeOpt === 'small' && 'bg-white rounded-xl text-black'
                }`}
                value="small"
                onClick={sizeHandle}
              >
                Small
              </button>
              <button
                className={`px-3 py-2 ${
                  sizeOpt === 'medium' && 'bg-white rounded-xl text-black'
                }`}
                value="medium"
                onClick={sizeHandle}
              >
                Medium
              </button>
              <button
                className={`px-3 py-2 ${
                  sizeOpt === 'large' && 'bg-white rounded-xl text-black'
                }`}
                value="large"
                onClick={sizeHandle}
              >
                Large
              </button>
            </div>
          </div>
          <Position />
          <div className="flex gap-2 flex-col">
            <p>Colors</p>
            <div className="flex gap-3">
              <button
                onClick={() => dispatch(setModalColor('bg-black'))}
                className="border border-colorOptions bg-black w-10 h-10 rounded-lg"
              ></button>
              <button
                onClick={() => dispatch(setModalColor('bg-colorOption1'))}
                className="border border-colorOptions bg-colorOption1 w-10 h-10 rounded-lg"
              ></button>
              <button
                onClick={() => dispatch(setModalColor('bg-colorOption2'))}
                className="border border-colorOptions bg-colorOption2 w-10 h-10 rounded-lg"
              ></button>
              <button
                onClick={() => dispatch(setModalColor('bg-colorOption3'))}
                className="border border-colorOptions bg-colorOption3 w-10 h-10 rounded-lg"
              ></button>
              <button
                onClick={() => dispatch(setModalColor('bg-white'))}
                className="border border-colorOptions bg-white w-10 h-10 rounded-lg"
              ></button>
            </div>
          </div>
          <form
            className="flex items-center gap-1 relative"
            method="post"
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          >
            <div className="flex flex-col gap-2">
              <p>Upload Logo</p>
              <div className="border border-dashed border-dragDrop rounded-xl bg-white flex items-center justify-center flex-col gap-3 py-5">
                <div className="bg-secondary w-20 h-20 flex items-center justify-center rounded-xl">
                  {!imageSrc ? (
                    <ImgUpload />
                  ) : (
                    <Image
                      src={imageSrc}
                      height={100}
                      width={100}
                      objectFit={'contain'}
                    />
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {imageSrc ? (
                    <Image src={imageSrc} height={500} width={250} />
                  ) : (
                    <div className="flex items-center gap-2">
                      <input type="file" name="file" />
                      <ImgUploadCloud />
                      <p>Drop your image here or</p>
                      <p className="text-primary underline"> upload</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="border border-black">
          <div className="flex items-center">
            <div>
              <Image src={imageSrc} height={500} width={250} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link href="/modaltemplates">
          <a className="bg-primary text-white py-2 px-4 rounded-lg w-max">
            Back
          </a>
        </Link>
        <Link href="/content">
          <a className="bg-primary text-white py-2 px-4 rounded-lg w-max">
            Next
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Appereance;
