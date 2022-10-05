import Link from 'next/link';
import { useState } from 'react';
const Pagination = () => {
  const [state, setState] = useState(1);

  const selectPage = (num: number) => {
    setState(num);
  };

  return (
    <div className="bg-secondary w-48 h-12 px-4 mt-5 grid grid-cols-3 leading-4 text-center items-center justify-center gap-8 mb-5 rounded-xl">
      <Link href={'/modaltemplates'}>
        <a
          onClick={() => selectPage(1)}
          className={`w-10 h-10 rounded-xl ${
            state == 1 && 'bg-white'
          } flex items-center justify-center`}
        >
          1
        </a>
      </Link>
      <Link href={'/modaltemplates/ModalGrid2'}>
        <a
          onClick={() => selectPage(2)}
          className={`w-10 h-10 rounded-xl ${
            state == 2 && 'bg-white'
          } flex items-center justify-center`}
        >
          2
        </a>
      </Link>
      <Link href={'/modaltemplates/ModalGrid3'}>
        <a
          onClick={() => selectPage(3)}
          className={`w-10 h-10 rounded-xl ${
            state == 3 && 'bg-white'
          } flex items-center justify-center`}
        >
          3
        </a>
      </Link>
    </div>
  );
};

export default Pagination;
