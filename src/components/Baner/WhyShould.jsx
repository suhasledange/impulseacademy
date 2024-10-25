import React from 'react';
import { question } from "../../assets";
import { benefits } from '../../constant';

const WhyShould = () => {

  return (
    <div className="flex items-start justify-between gap-10 w-full">

      {/* Left Side - Header and Image */}
      <div className="flex flex-col items-center mx-auto justify-center">
        <h1 className="text-text-head text-3xl font-semibold mb-6 w-[80%]">
          Why <span className=" text-text-primary">Should</span> You Study Here?
        </h1>
        <div className="w-[20rem] h-[20rem]">
          <img className="w-full h-full object-contain" src={question} alt="question icon" />
        </div>
      </div>

      {/* Right Side - Zig-Zag Benefits List */}
      <div className="flex flex-col gap-8 w-[45%] mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className={`flex items-center gap-4 shadow-lg rounded-full w-80 p-2 ${
              index % 2 === 0 ? 'self-start' : 'self-end'
            }`}
          >
            <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center`}>
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
