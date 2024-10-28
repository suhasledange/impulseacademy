import React from 'react'
import {
    bulb,
    growth,
    Mortarboard,
  } from "../../assets";
const WhatShould = () => {
  return (
    <div>
            
    <div className="flex items-center justify-center gap-10">
      <h1 className="lg:text-3xl text-2xl font-semibold text-text-head">
        What We Stand For{" "}
      </h1>
      <div className="lg:w-12 lg:h-9 md:w-10 md:h-7 w-9 h-6">
        <img
          className=" object-contain w-full h-full"
          src={growth}
          alt="icn"
        />
      </div>
    </div>

    <div className="relative flex items-center justify-center w-[100%] md:w-[80%] mx-auto shadow-xl md:px-10 px-3 py-6 gap-6 rounded-2xl">
      
      <div className="w-72 h-40 hidden md:block">
        <img
          className="w-full h-full object-contain"
          src={bulb}
          alt="icon"
        />
      </div>
      <div>
        <p className=" text-text-para lg:text-md text-sm text-justify lg:w-[90%] md:w-[93%] w-full mx-auto">
          At <span className="text-black">Impulse Academy</span>, we
          believe in empowering students through expert guidance,
          comprehensive resources, and a commitment to academic
          excellence.Our goal is to provide a strong foundation for
          competitive exams like{" "}
          <span className="text-black">JEE, and MHT-CET</span>, while also
          while also offering in-depth support for{" "}
          <span className="text-black">11th and 12th-grade </span>
          Physics.With a focus on personalized learning and proven
          results,we are dedicated to helping students achieve their
          dreams
        </p>
        <div className="absolute -bottom-6 right-44 rounded-full bg-gray-100 lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10">
          <img
            className="w-full h-full object-contain"
            src={Mortarboard}
            alt="icon"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhatShould
