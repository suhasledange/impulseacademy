import React from 'react';
import { Counterdata } from '../../constant';
import AnimateNumber from './AnimateNumber';

const Counter = () => {
  return (
    <div className='mt-24 '>
      <div className='flex items-center justify-between w-full'>
        {Counterdata.map((data) => (
            <div key={data.id} className='flex items-center justify-between'>
            <div className='w-[70%]'>
              <h3 className='text-sm mb-2 font-medium text-gray-600'>{data.title}</h3>
              <div className='text-3xl flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-text-count to-blue-200'>
                <AnimateNumber n={data.count} />
              </div>
            </div>
              {data.id < 5 && (
              <div className='w-[1px] h-[4.5rem] bg-gray-400'></div>
            )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
