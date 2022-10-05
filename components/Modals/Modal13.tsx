import Exit from '../../assets/images/exit.svg';
import SmileIcon from '../../assets/images/modals/Modal13/smileIcon.svg';

const Modal13 = () => {
  return (
    <div className="w-[350px] h-max bg-primary rounded-lg flex-col px-4 py-4">
      <div className="flex justify-end">
        <Exit />
      </div>
      <div className="flex items-center justify-center">
        <SmileIcon />
      </div>
      <div className="flex flex-col gap-4 mt-4 items-center justify-center text-center">
        <p className="font-bold text-3xl text-white">Welcome to talk</p>
        <p className="text-lg text-white">
          Send friends photos, videos, locations, songs, voice messages, and
          more.
        </p>
      </div>

      <p className="font-medium text-white mt-5 text-center">
        Let’s get started
      </p>
    </div>
  );
};

export default Modal13;
