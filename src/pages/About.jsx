import React from "react";
import Container from "../components/Container";
import Section1 from "../components/About/Section1";
import Section2 from "../components/About/Section2";

const About = () => {
  return (
    <div className="bg-white w-full">
      <Container className="my-16">
        <div className="mb-16">
          <h1 className="lg:text-3xl text-2xl text-text-head font-semibold mb-6">
            About Our Academy
          </h1>
          <p className=" text-text-para lg:text-md text-sm text-justify">
            The Impulse academy, established in 2010 in Bhusawal, has been
            dedicated to providing quality education for both board and
            competitive exams. Over the years, it has become a trusted institute
            known for its focus on student success and personalized learning.
            With a mission to empower students through comprehensive education,
            the academy offers tailored courses for MHT-CET and JEE preparation,
            alongside strong support for 11th and 12th-state board studies.
            Achieving key milestones, including over 500 successful students in
            top exams, the academy continues to evolve by incorporating modern
            teaching methods and fostering a passion for learning in every
            student.
          </p>
        </div>

        <Section1/>
        <Section2/>

      </Container>
    </div>
  );
};

export default About;
