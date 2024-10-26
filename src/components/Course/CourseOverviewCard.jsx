import React from 'react';

const CourseOverviewCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg hover:shadow-xl duration-200 flex flex-col items-center justify-between shadow-lg p-8 w-full max-w-lg mx-auto">
      <div>

      <div className='flex items-center justify-start gap-1 mb-5'>
        <div className='flex items-center justify-center w-14 h-14'>
            <img className='w-full h-full object-contain' src={course.image} alt={course.id}/>
        </div>
        <h1 className="text-xl text-text-head font-semibold ml-2">
                {course.title}
        </h1>
      </div>

      <p className="text-gray-700 h-36 text-sm text-justify mb-5">
        {course.description}
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-head mb-3">Class 11th Topics</h3>
          <ul className="list-none space-y-2 text-gray-700">
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
        <button className="bg-blue-btn duration-200 active:scale-95 hover:bg-text-para text-white font-semibold py-2 px-8 rounded-full shadow-lg">
          Enroll Now
        </button>
      </div>

    </div>
  );
};

export default CourseOverviewCard;
