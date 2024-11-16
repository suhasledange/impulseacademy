import React from 'react';
import { Counterdata } from '../../constant';
import AnimateNumber from './AnimateNumber';

const Counter = () => {
  return (
    <div className='lg:mt-24 md:mt-20 mt-14 '>
      <div className='flex flex-wrap lg:flex-row md:flex-row flex-col lg:items-center md:items-center lg:gap-0 md:gap-6 lg:justify-between w-full mx-auto'>
        {Counterdata && Counterdata?.map((data) => (
            <div key={data.id} className='flex items-center justify-between mb-6'>
            <div className={`${data.id < 5 ? "lg:border-r-2":""}  lg:px-8 md:px-6 px-4`}>
              <p className='text-sm mb-2 font-medium text-gray-600'>{data.title}</p>
              <div className='md:text-3xl text-2xl flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-text-count to-blue-200'>
                <AnimateNumber n={data.count} />
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
