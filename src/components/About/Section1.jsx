import React from 'react'
import { facutyInfo } from '../../constant'
import { AboutFaculty } from '../../assets'

const Section1 = () => {
  return (
    <div className="mb-10">
    <h1 className="text-3xl mb-16 font-semibold md:w-[28%] w-[60%] mx-auto text-center text-text-head">
      Together{" "}
      <span className=" text-text-para">We Will Rebuild Your Future</span>
    </h1>

    <div className="flex md:flex-row flex-col items-start justify-between gap-14 max-w-screen-lg mx-auto">
      <div className="min-w-80 h-96 mx-auto flex bg-back-about items-center justify-center border-back-about1 border-8 overflow-hidden rounded-full">
        <img
          className="w-full h-full object-cover"
          src={AboutFaculty}
          alt="faculty"
        />
      </div>
      <div className="mt-8">
        <div>
          <h1 className="mb-4 text-text-head text-xl font-semibold">
            Prof. Manoj P. Badgujar
          </h1>
          {facutyInfo.map((f) => (
            <p key={f.id} className="text-text-head mb-1 text-justify font-medium">
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
