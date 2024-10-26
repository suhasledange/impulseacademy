import React from 'react'
import {
    bulb,
    growth,
    Mortarboard,
  } from "../../assets";
const WhatShould = () => {
  return (
    <div className="">
            
    <div className="flex items-center justify-center gap-10">
      <h1 className="text-3xl font-semibold text-text-head">
        What We Stand For{" "}
      </h1>
      <div className="w-12 h-9">
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
        <p className=" text-text-para text-md text-justify w-[90%] mx-auto">
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
        <div className="absolute -bottom-6 right-44 rounded-full bg-gray-100 w-14 h-14">
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
