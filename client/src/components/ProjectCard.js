import { FiEdit } from "react-icons/fi";
import { useAppContext } from "../context/appContext";
const ProjectCard = ({ title, link, github, thumb, classname }) => {
  const { user } = useAppContext();
  return (
    <div
      className={`pj-card h-[170px] laptop:w-[300px] tablet:w-[300px] w-[250px] ${classname} shadow-md shadow-gray-500 rounded-md`}
    >
      <div className="thumb_info group relative w-full h-full rounded-md">
        <div className="w-full h-full bg-gray-800/50 z-5 hidden rounded-md group-hover:block absolute top-0 left-0"></div>
        <div className="thumb-img w-full h-full rounded-md">
          <img
            src={thumb}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="info hidden absolute group-hover:flex items-center space-x-5 z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="bg-gray-200/60 block text-slate-700 font-semibold tracking-[1.5] py-[5px] px-2 rounded-md">
            <a href={link} target="_blank">
              Demo
            </a>
          </div>
          <div className="bg-gray-200/60 block text-slate-700 font-semibold tracking-[1.5] py-[5px] px-2 rounded-md">
            <a href={github} target="_blank">
              Github
            </a>
          </div>
        </div>
        {user && (
          <FiEdit className="absolute top-2 right-2 bg-emerald-500/80 rounded-md cursor-pointer text-white text-xl block w-5 h-5 p-[2px]" />
        )}
      </div>
      <div className="title text-slate-700 font-semibold tracking-[1.5px] text-lg px-1 py-1 truncate">
        {title}
      </div>
    </div>
  );
};
export default ProjectCard;
