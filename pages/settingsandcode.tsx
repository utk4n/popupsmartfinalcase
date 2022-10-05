import BrowserLanguage from '../components/BrowserLanguage';
import Toggle from '../components/Toggle';
import ThickImg from '../assets/images/thick.svg';
import Preview from '../components/Preview';
import { useAppSelector } from '../hooks/useRedux';
import Link from 'next/link';
const SettingsandCode = () => {
  return (
    <div className=" w-[80%] mx-auto flex flex-col gap-4">
      <div className="grid grid-cols-2 mt-16">
        <div className="w-2/3 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[18px] ">
            <p className="bg-textBg font-semibold rounded-full w-9 h-9 flex items-center justify-center">
              5
            </p>
            <p className="font-semibold">Settings and Code</p>
          </div>

          <div>
            <div className="flex justify-between">
              <p className="font-semibold font-poppins text-lg">
                Webhook to Send data
              </p>
            </div>

            <div>
              <div className="flex justify-between mt-4 flex-col">
                <p className=" font-poppins text-sm">Enter youe Webhook URL</p>
                <p className="text-xs font-poppins">
                  You can create a simple one with <strong>make.com</strong>
                </p>
              </div>
              <input
                type="text"
                className="mt-3 font-poppins text-sm template_content_input placeholder:text-[#999999]"
                placeholder="Your Webhook URL"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-[18px] h-[18px] border border-inputCheck ${'bg-primary'} rounded-md ml-2 relative flex items-center justify-center`}
                >
                  <ThickImg
                    className={`w-[9.9px] h-[7.54px] absolute my-auto `}
                  />
                </div>
                <p className="font-poppins text-xs">Send form submissions</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div
                  className={`w-[18px] h-[18px] border border-inputCheck ${'bg-primary'} rounded-md ml-2 relative flex items-center justify-center`}
                >
                  <ThickImg
                    className={`w-[9.9px] h-[7.54px] absolute my-auto `}
                  />
                </div>
                <p className="font-poppins text-xs">Send click data</p>
              </div>
              <button className="bg-primary border text-white text-center w-44 h-14 rounded-xl shadow-btnShadow mt-8">
                Get your Code
              </button>
            </div>
          </div>
        </div>
        <Preview />
      </div>
      <div className='flex items-center justify-between'>
      <Link href="/targetingrules">
        <a className="bg-primary text-white py-2 px-4 rounded-lg w-max">Back</a>
      </Link>
      <Link href="/">
        <a className="bg-primary text-white py-2 px-4 rounded-lg w-max">Back to home</a>
      </Link>
      </div>
    </div>
  );
};

export default SettingsandCode;
