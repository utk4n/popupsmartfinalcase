import ImgUpload from '../assets/images/imgupload.svg';
import ImgUploadCloud from '../assets/images/imgupcloud.svg';
import React, { useState } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { imgPath, userEmail, signupEmail } from '../redux/modalSlice';
import Link from 'next/link';
const Content = () => {
  const modal = useAppSelector((state) => state.modal);
  console.log(modal.logoUrl);

  const [imageSrc, setImageSrc] = useState<any>();
  const [uploadData, setUploadData] = useState();
  const dispatch = useAppDispatch();

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
  console.log('imgsrc', imageSrc);
  console.log('uplaoddata', uploadData);
  const emailHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(userEmail(inputValue));
  };

  const signupEmailHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(signupEmail(inputValue));
  };

  return (
    <div className=" w-[80%] mx-auto flex flex-col gap-4">
      <div className="grid grid-cols-2 mt-16">
        <div className="w-2/3 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[18px] ">
            <p className="bg-textBg font-semibold rounded-full w-9 h-9 flex items-center justify-center">
              3
            </p>
            <p className="font-semibold">Content</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Edit your content</p>
            <div className="flex flex-col gap-2">
              <input
                value={modal.userEmail}
                onChange={emailHandle}
                type="text"
                placeholder="Sign up"
                className="template_content_input placeholder:text-sm"
              />
              <input
                value={modal.signUpEmail}
                onChange={signupEmailHandle}
                type="email"
                placeholder="Enter your email"
                className="template_content_input placeholder:text-sm"
              />

              <input
                type="text"
                placeholder="By singning up, you agree to Privacy Policy"
                className="template_content_input placeholder:text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Upload image</p>
            <div className="border border-dashed border-dragDrop rounded-xl bg-white flex items-center justify-center flex-col gap-3 py-5">
              <div className="bg-secondary w-20 h-20 flex items-center justify-center ">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    height={100}
                    width={100}
                    objectFit={'contain'}
                    alt="logo"
                  />
                ) : (
                  <ImgUpload />
                )}
              </div>

              <form
                className="flex items-center gap-1 relative"
                method="post"
                onChange={handleOnChange}
                onSubmit={handleOnSubmit}
              >
                {/* <button className="text-primary underline">upload</button> */}
                {/* {imageSrc ? (
                  <p>
                    <button className="bg-primary py-3 w-24 font-medium text-xs rounded-xl text-white">
                      Upload Image
                    </button>
                  </p>
                ) : (
                  <>
                    <input
                      type="file"
                      name="file"
                      className=" w-full absolute opacity-0 z-40"
                    />

                    <ImgUploadCloud />
                    <p>Drop your image here or upload</p>
                  </>
                )} */}

                <div className=" flex items-center justify-center relative">
                  <input type="file" name="file" className='absolute opacity-0'/>
                  <div className="flex items-center gap-1">
                <ImgUploadCloud />
              
                <p>Drop your image here or</p>
                <p className="text-primary underline"> upload</p>
              </div>
                </div>

                {imageSrc && !uploadData && (
                  <p>
                    <button className="bg-primary py-3 w-24 font-medium text-xs rounded-xl text-white">
                      Upload Image
                    </button>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className=" border border-black">
          <div className="flex items-center ">
            {imageSrc && (
              <Image
                src={imageSrc}
                objectFit="cover"
                height={500}
                width={250}
                alt="img"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link href="/appereance">
          <a className="bg-primary text-white py-2 px-4 rounded-lg w-max">
            Back
          </a>
        </Link>
        <Link href="/targetingrules">
          <a className="bg-primary text-white py-2 px-4 rounded-lg w-max">
            Next
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Content;
