import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import {
  setModalColor,
  setModalSize,
  setModalPosition,
} from '../redux/modalSlice';
const Position = () => {
  const dispatch = useAppDispatch();

  const positionHandle = (position1: string, position2?: string) => {
    const targetNameValue = `${position1} ${position2}`;
    dispatch(setModalPosition(targetNameValue));
  };
  return (
    <div className="flex gap-2 flex-col">
      <p>Position</p>
      <div className="grid grid-cols-3 w-1/4 gap-y-1 gap-x-0.5">
        <button
          onClick={() => positionHandle('left-0', 'top-0')}
          className="border border-gridBorder w-6 h-4 rounded-tl-lg"
        ></button>
        <button
          onClick={() => positionHandle('top-0')}
          className="border border-gridBorder w-6 h-4 "
        ></button>
        <button
          onClick={() => positionHandle('top-0', 'right-0')}
          className="border border-gridBorder w-6 h-4 rounded-tr-lg"
        ></button>
        <button
          onClick={() => positionHandle('left-0', 'top-[50%]')}
          className="border border-gridBorder w-6 h-4 "
        ></button>
        <button
          onClick={() => positionHandle('left-[50%]', 'top-[50%]')}
          className="border border-gridBorder w-6 h-4 bg-primary"
        ></button>
        <button
          onClick={() => positionHandle('right-0', 'top-[50%]')}
          className="border border-gridBorder w-6 h-4 "
        ></button>
        <button
          onClick={() => positionHandle('left-0', 'bottom-0')}
          className="border border-gridBorder w-6 h-4 rounded-bl-lg"
        ></button>
        <button
          onClick={() => positionHandle('left-[50%]', 'bottom-0')}
          className="border border-gridBorder w-6 h-4 "
        ></button>
        <button
          onClick={() => positionHandle('right-0', 'bottom-0')}
          className="border border-gridBorder w-6 h-4 rounded-br-lg"
        ></button>
      </div>
    </div>
  );
};

export default Position;
