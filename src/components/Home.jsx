// import { useState } from "react";
import UserImg from "../assets/photo.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Navigation module

// import required modules
import { Navigation } from "swiper/modules";

function Home() {
  const images = [
    "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
    "https://images.unsplash.com/photo-1590959651373-a3db0f38a961",
    "https://images.unsplash.com/photo-1619410283995-43d9134e7656",
  ];
  return (
    <>
      <section className="" id="home">
        <div className="flex max-w-[1000px] mx-auto justify-around items-center gap-6">
          <div className="flex flex-col space-y-2.5 ">
            <a
              href="https://www.linkedin.com/in/rithwik-sannapu-784b661b1/"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <i className="text-xl text-first-color uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://twitter.com/RithwikS24"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <i className="text-xl text-first-color uil uil-twitter-alt"></i>
            </a>
            <a
              href="https://github.com/RithwikSannapu"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <i className="text-xl text-first-color uil uil-github-alt"></i>
            </a>
          </div>
          <div className="flex flex-col max-w-sm space-y-6">
            <h1 className="text-5xl tracking-wide leading-snug">
              Welcome to my portfolio. Hi, I&apos; am Rithwik
            </h1>
            <h3 className="text-text-color text-xl">Web Developer</h3>
            <p className="text-text-color">
              highly skilled in front end web development and has a decent touch
              on back end.
            </p>
            <a
              href="#contact"
              className="bg-first-color rounded py-4 px-8 text-white w-fit font-bold"
            >
              Contact Me<i className="uil uil-message button__icon ml-2"></i>
            </a>
          </div>
          <div className="home__img">
            <img src={UserImg} alt="photo" className="about__img" />

            <div className="mt-2 space-y-0.5">
              <h2>Hobbies</h2>
              <p>Playing chess, Reading boks</p>
              <h3>Favourite Cuisine</h3>
              <p>Indian food</p>
              <h3>Favorite Sport</h3>
              <p>Cricket</p>
            </div>
          </div>
        </div>
      </section>
      <div className="Slider my-10  mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img loading="lazy" src={img} alt="my imng" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Home;
