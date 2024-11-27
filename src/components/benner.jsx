import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Benner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full">
        <div
          className="block text-center font-secondary font-black text-[30px]"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-delay="0"
        >
          Hello I am
          <div>
            <TypeAnimation
              sequence={[
                "Front-End Web Developer",
                1000,
                "Full Stack Developer with Laravel",
                1000,
                "UI/UX Design",
                1000,
                "Editing Video",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
        </div>
        <div
          className="max-w-[750px] text-center mx-auto mt-5"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-delay="0"
        >
          This portfolio showcases several projects I have completed during my
          studies, focusing on three main areas: training, skills, and project
          outcomes.
        </div>
      </div>
    </div>
  );
}
