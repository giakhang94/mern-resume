import { HiOutlineMail } from "react-icons/hi";
import { ImMobile } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import SkillSlider from "./SkillSlider";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import mern from "../assets/images/mern.png";
import mongodb from "../assets/images/mongodb.png";
import socketio from "../assets/images/socketio.png";
import tailwindcss from "../assets/images/tailwindcss.png";
const info = {
  age: 29,
  mobile: "0903282901",
  fullname: "Nguyễn Gia Khang",
  email: "ngk.khang94@gmail.com",
  location: "HCMC and Vinh Long Town",
  education: ["MIS", " Finance"],
  university: "Banking University - HCMC",
  skills: [
    css,
    html,
    mern,
    react,
    mongodb,
    socketio,
    tailwindcss,
    js,
    node,
    express,
  ],
  package: ["socket.io", "tailwindcss", "maps", "fusion chart", "express"],
};
const Info = () => {
  return (
    <div className="mb-8 w-full">
      <div className="flex items-center mobile:justify-start smallmobile:justify-start tablet:justify-center laptop:justify-center flex-wrap">
        <div className="flex items-center mx-8">
          <span className="mr-2  text-emerald-600 text-lg font-bold bg-emerald-300 p-2 rounded-[50%]">
            <FiUser />
          </span>
          <span className="text-slate-700 tracking[1px] font-semibold">
            {info.fullname}
          </span>
        </div>
        <div className="flex items-center mx-8">
          <span className="mr-2 text-red-600 font-bold bg-red-300 text-lg p-2 rounded-[50%]">
            <HiOutlineMail />
          </span>
          <span className="text-slate-700 tracking[1px] font-semibold">
            {info.email}
          </span>
        </div>
        <div className="flex items-center mx-8">
          <span className="mr-2 text-violet-600 font-bold bg-violet-300 text-lg p-2 rounded-[50%]">
            <ImMobile />
          </span>
          <span className="text-slate-700 tracking[1px] font-semibold">
            {info.mobile}
          </span>
        </div>
        <div className="flex items-center mx-8">
          <span className="mr-2 text-blue-600 font-bold bg-blue-300 text-lg p-2 rounded-[50%]">
            <MdLocationOn />
          </span>
          <span className="text-slate-700 tracking[1px] font-semibold">
            {info.location}
          </span>
        </div>
      </div>
      <div className="skill"></div>
      <div className="mobile:hidden smallmobile:hidden tablet:block laptop:block">
        <SkillSlider skills={info.skills} />
      </div>
    </div>
  );
};
export default Info;
