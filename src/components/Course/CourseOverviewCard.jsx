import React from 'react';

const CourseOverviewCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg hover:shadow-xl duration-200 flex flex-col items-center justify-between shadow-lg p-8 flex-grow lg:max-w-[25.5rem] md:max-w-[26rem] max-w-[26rem] lg:mx-0 md:mx-0 mx-auto">
      <div>

      <div className='flex items-center justify-start gap-1 mb-5'>
        <div className='flex items-center justify-center lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10'>
            <img className='w-full h-full object-contain' src={course.image} alt={course.id}/>
        </div>
        <h1 className="lg:text-xl text-lg text-text-head font-semibold ml-2">
                {course.title}
        </h1>
      </div>

      <p className="text-gray-700 lg:h-36 h-auto text-sm text-justify mb-5">
        {course.description}
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start lg:gap-8 md:gap-6 gap-4">
        <div className="flex-1">
          <h3 className="lg:text-lg text-md font-semibold text-text-head mb-3">Class 11th Topics</h3>
          <ul className="list-none space-y-2 lg:text-md text-sm text-gray-700">
            {course.topics.class11.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="text-text-para mr-2">✓</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-head mb-3">Class 12th Topics</h3>
          <ul className="list-none space-y-2 text-gray-700">
            {course.topics.class12.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="text-text-para mr-2">✓</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <div className="text-center mt-8">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkfcPqCHmHB73dxgzlnp3oI8p8QbXTOSdg9qnPKDs9AWGSlA/viewform?vc=0&c=0&w=1&flr=0" target="_blank" aria-label="enroll link">
        <button className="bg-blue-btn duration-200 active:scale-95 hover:bg-text-para text-white font-semibold py-2 px-8 rounded-full shadow-lg lg:text-md text-sm">
          Enroll Now
        </button>
        </a>
      </div>

    </div>
  );
};

export default CourseOverviewCard;
