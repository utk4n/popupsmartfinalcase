import { useState } from "react";
import { imgPath } from "../redux/modalSlice";
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';

const useUpload = () => {

    const modal = useAppSelector((state) => state.modal);
  console.log(modal.logoUrl.url);

  const [imageSrc, setImageSrc] = useState<any>();
  const [uploadData, setUploadData] = useState();
  const dispatch = useAppDispatch();

  function handleOnChange(changeEvent: any) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: any) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

 

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
    dispatch(imgPath(data));
    setUploadData(data);
  }
  console.log(modal);

  return {handleOnChange,handleOnSubmit,imageSrc}
}

export default useUpload