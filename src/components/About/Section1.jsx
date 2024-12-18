import React from 'react'
import { facutyInfo } from '../../constant'
import { AboutFaculty } from '../../assets'

const Section1 = () => {
  return (
    <div className="mb-10">
    <h1 className="lg:text-3xl text-2xl lg:mb-16 md:mb-14 mb-10 font-semibold md:w-[28%] w-[60%] mx-auto text-center text-text-head">
      Together{" "}
      <span className=" text-text-para">We Will Rebuild Your Future</span>
    </h1>

    <div className="flex md:flex-row flex-col items-start justify-between lg:gap-14 md:gap-6 gap-4 max-w-screen-lg mx-auto">
      <div className="lg:min-w-80 lg:h-96 min-w-64 h-72 mx-auto flex bg-back-about items-center justify-center border-back-about1 border-8 overflow-hidden rounded-full">
        <img
          className="w-full h-full object-cover"
          src={AboutFaculty}
          alt="faculty"
        />
      </div>
      <div className="mt-8">
        <div>
          <h1 className="mb-4 text-text-head lg:text-xl text-lg font-semibold">
            Prof. Manoj P. Badgujar
          </h1>
          {facutyInfo.map((f) => (
            <p key={f.id} className="text-text-head mb-2 lg:text-md text-sm text-justify font-medium">
              {f.title} :{" "} 
              <span className="text-text-para  font-normal">
                {f.description}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section1
