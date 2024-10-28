import React from "react";
import Container from "../components/Container";
import { AccessNotes, CourseEnrollInfo, publications, review } from "../constant";
import CourseOverviewCard from "../components/Course/CourseOverviewCard";
import Baner2 from "../components/Baner/Baner2";
import { courseArt, laptop } from "../assets";
import DownloadCard from "../components/Course/DownloadCard";
import ReviewCard from "../components/Review/ReviewCard";

const Courses = () => {
  return (
    <div className="bg-white w-full">
      <Container className="lg:my-16 my-8">
        <h1 className="text-text-head lg:text-3xl text-2xl font-semibold text-center">
          Pick A <span className="text-text-para">Course</span> To Get Started
        </h1>

        <div
          className="w-full relative mx-auto lg:mt-16 md:mt-10 mt-6 grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
        >
          {CourseEnrollInfo.map((c) => (
            <CourseOverviewCard key={c.id} course={c} />
          ))}
        </div>

        {/* publications */}
        <div className="mt-20">
          <h1 className="lg:text-3xl text-2xl text-center font-medium mb-8 text-text-head">
            Publications We Use
          </h1>
          <div className="flex flex-wrap items-center justify-center lg:gap-10 gap-7">
            {publications.map((p) => (
              <div className=" bg-gray-300 cursor-pointer hover:shadow-xl shadow-md duration-200 text-text-head px-6 py-2 rounded-lg lg:text-md text-sm">
                {p.title}
              </div>
            ))}
          </div>
        </div>

        {/* notes */}
        <div className="mt-20 flex flex-col items-center justify-center w-full">
          {/* <div className="relative rounded-3xl text-lg font-medium w-full mx-auto max-w-screen-sm text-center bg-back-about2 p-9 text-white">
            Physics Researches Hub
              <img className="w-56 absolute -top-28 right-40 lg:right-52 md:right-56 h-auto object-contain" src={laptop} />
          </div> */}
          
          <Baner2 title="Physics Researches Hub" image={laptop} className1="justify-between bg-text-head max-w-screen-lg" className="w-[90%] lg:w-[30%] md:w-[50%]" imageWidth="w-28 h-24 pb-3"/>

          <div className="mt-16 flex flex-col items-center justify-center w-full">
            <h1 className="text-2xl md:w-[50%] lg:w-[30%] w-[80%] text-center text-text-head">
              Access <span className="text-text-primary">Free Notes</span> &
              Resources For Key Physics Topic
            </h1>

            <div
              className="lg:w-[80%] md:w-[85%] w-[90%] mx-auto grid gap-4 mt-8 mb-8"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              }}
            >
              {AccessNotes.map((a) => (
                <DownloadCard
                  key={a.id}
                  title={a.title}
                  description={a.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* review */}

        <div className="mt-16">
          <h1 className="text-2xl mb-6 text-center text-text-head font-semibold">
            Success Stories!!!
          </h1>
          <div className='w-full flex flex-wrap gap-4 mt-8 mb-8' >
            {review.map((r) => (
              <ReviewCard
                key={r.id}
                image={r.image}
                review={r.review}
                name={r.name}
                batch={r.batch}
              />
            ))}
          </div>
        </div>

        {/* enroll */}
        <div className="lg:max-w-[26%] md:max-w-[36%] max-w-[70%] mx-auto flex flex-col items-center justify-center mt-16">
          <h1 className="lg:text-xl text-lg mb-8 font-medium text-center text-text-head">
            Ready to take your Physics Skills to the next level?
          </h1>
          <button className="lg:text-lg text-md text-white rounded-xl hover:bg-text-para hover:shadow-lg duration-200 bg-blue-btn px-8 py-3 w-full">
            Enroll Now
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
