import React from "react";
import Container from "../components/Container";
import { CourseEnrollInfo, publications } from "../constant";
import CourseOverviewCard from "../components/Course/CourseOverviewCard";
import Baner2 from "../components/Baner/Baner2";

const Courses = () => {
  return (
    <div className="bg-white w-full">
      <Container className="my-16">
        <h1 className="text-text-head text-3xl font-semibold text-center">
          Pick A <span className="text-text-para">Course</span> To Get Started
        </h1>

        <div
          className="w-full mx-auto mt-16 grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
        >
          {CourseEnrollInfo.map((c) => (
            <CourseOverviewCard key={c.id} course={c} />
          ))}
        </div>

          {/* publications */}
          <div className="mt-16">
              <h1 className="text-xl font-medium mb-6 text-text-head">Publications We Use</h1>
              <div className="flex flex-wrap items-center justify-start gap-10">
                  {
                    publications.map(p=>(
                        <div className=" bg-gray-300 cursor-pointer hover:shadow-xl shadow-md duration-200 text-text-head px-6 py-2 rounded-lg">
                          {p.title}
                        </div>
                    ))
                  }
              </div>
          </div>

          {/* notes */}

          {/* <Baner2 title="Physics Researches Hub" className="text-center"/> */}

      </Container>
    </div>
  );
};

export default Courses;
