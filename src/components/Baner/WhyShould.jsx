import React from 'react';
import { question } from "../../assets";
import { benefits } from '../../constant';

const WhyShould = () => {

  return (
    <div className="flex flex-wrap items-start lg:justify-between lg:gap-0 md:gap-6 gap-8 justify-center w-full max-w-screen-lg mx-auto">

      {/* Left Side - Header and Image */}
      <div className="flex flex-col justify-center">
        <h1 className="text-text-head lg:text-3xl text-2xl font-semibold mb-6 lg:w-[70%] md:w-[85%] w-[100%]">
          Why <span className=" text-text-primary">Should</span> You Study Here?
        </h1>
        <div className="lg:w-[20rem] lg:h-[20rem] md:w-[18rem] md:h-[18rem] w-[16rem] h-[16rem] lg:mx-0 mx-auto">
          <img className="w-full h-full object-contain" src={question} alt="question icon" />
        </div>
      </div>

      {/* Right Side - Zig-Zag Benefits List */}
      <div className="flex flex-col lg:gap-12 md:gap-10 gap-8 lg:w-[55%] md:w-[70%] w-[100%] lg:self-end self-center">
        {benefits && benefits?.map((benefit, index) => (
          <div
            key={benefit.id}
            className={`flex items-center lg:gap-4 md:gap-3 gap-2 shadow-lg rounded-full w-80 ${
              index % 2 === 0 ? 'self-start' : 'self-end'
            }`}
          >
            <div className={`lg:w-[3.7rem] lg:h-[3.7rem] md:w-[3.4rem] md: h-[3.1rem] w-[3.1rem] ${benefit.bgColor} rounded-full flex items-center justify-center p-2`}>
              <img className="w-full h-full object-contain" src={benefit.icon} alt={benefit.text} />
            </div>
            <h3 className="text-text-head lg:text-lg text-md font-semibold">{benefit.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyShould;
