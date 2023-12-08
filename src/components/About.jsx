// import { useState } from "react";
import UserImg from "../assets/photo.png";

function About() {
  return (
    <>
      <section className="max-w-screen-md mx-auto" id="about">
        <h2 className="text-center text-3xl">About Me</h2>
        <p className="text-lg text-center mb-10">My Introduction</p>

        <div className="flex flex-1 gap-6">
          <a href="">
            <img src={UserImg} alt="photo" className="about__img" />
          </a>
          <div className="max-w-md px-4">
            <p className="text-left text-lg">
              Enthusiastic web developer focused to develop websites and has 3
              years of experience by completing 5 cerifications in 2 companies
            </p>
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leadi lg:text-3xl text-title-color">
                  03+
                </p>
                <p className="text-sm sm:text-base">Years experience</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leadi lg:text-3xl text-title-color">
                  89K
                </p>
                <p className="text-sm sm:text-base">Completed certifications</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leadi lg:text-3xl text-title-color">
                  02+
                </p>
                <p className="text-sm sm:text-base">companies worked</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
