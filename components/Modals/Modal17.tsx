import React from 'react';
import Exit from '../../assets/images/exit.svg';
import DownlaodIcon from '../../assets/images/modals/Modal17/downloadIcon.svg';
import EmailIcon from '../../assets/images/modals/Modal17/emailIcon.svg';
import PdfIcon from '../../assets/images/modals/Modal17/pdfIcon.svg';
import PrintIcon from '../../assets/images/modals/Modal17/printIcon.svg';
const Modal17 = () => {
  return (
    <div className="w-[400px] h-full shadow-btnShadow rounded-lg py-3 px-3">
      <div className="flex justify-end w-full">
        <Exit />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-3xl text-center">Ready to export</p>
        <p className="font-normal text-lg text-center">Take action now.</p>
      </div>
      <div className="flex gap-3 py-3 items-center justify-center mt-2">
        <div className="flex items-center justify-center rounded-full h-8 w-8 mx-auto">
          <DownlaodIcon />
        </div>
        <div className="flex items-center justify-center rounded-full h-8 w-8 mx-auto">
          <PdfIcon />
        </div>
        <div className="flex items-center justify-center rounded-full h-8 w-8 mx-auto">
          <EmailIcon />
        </div>
        <div className="flex items-center justify-center rounded-full h-8 w-8 mx-auto">
          <PrintIcon />
        </div>
      </div>
    </div>
  );
};

export default Modal17;
