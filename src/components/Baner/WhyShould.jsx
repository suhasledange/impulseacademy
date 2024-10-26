import React from 'react';
import { question } from "../../assets";
import { benefits } from '../../constant';

const WhyShould = () => {

  return (
    <div className="flex flex-wrap items-start justify-between w-full max-w-screen-lg ">

      {/* Left Side - Header and Image */}
      <div className="flex flex-col justify-center">
        <h1 className="text-text-head text-3xl font-semibold mb-6 w-[70%]">
          Why <span className=" text-text-primary">Should</span> You Study Here?
        </h1>
        <div className="w-[20rem] h-[20rem]">
          <img className="w-full h-full object-contain" src={question} alt="question icon" />
        </div>
      </div>

      {/* Right Side - Zig-Zag Benefits List */}
      <div className="flex flex-col gap-12 w-[55%] self-end">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className={`flex items-center gap-4 shadow-lg rounded-full w-80 ${
              index % 2 === 0 ? 'self-start' : 'self-end'
            }`}
          >
            <div className={`w-[3.7rem] h-[3.7rem] ${benefit.bgColor} rounded-full flex items-center justify-center p-2`}>
              <img className="w-full h-full object-contain" src={benefit.icon} alt={benefit.text} />
            </div>
            <h3 className="text-text-head text-lg font-semibold">{benefit.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyShould;
