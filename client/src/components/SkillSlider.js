import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  draggable: true,
  pauseOnHover: true,
  //   infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 1,
};
export default function SkillSlider({ skills }) {
  return (
    <div className="my-10">
      <Slider {...settings}>
        {skills.map((skill, index) => {
          return (
            <div key={index + "skill"}>
              <img src={skill} alt="" className="w-auto h-20" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
