import { FiEdit } from "react-icons/fi";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
const ProjectCard = ({ title, link, github, thumb, classname, id }) => {
  const { user } = useAppContext();
  return (
    <div
      className={`pj-card h-[170px] laptop:w-[300px] tablet:w-[300px] w-[250px] ${classname} shadow-md shadow-gray-500 rounded-md`}
    >
      <div className="thumb_info group relative w-full h-full rounded-md">
        <div className ="text-sm text-white font-bold absolute top-1 rounded-md py-1 px-1 hidden group-hover:block">Xin chờ page load hơi lâu ạ (vì mình dùng host free)</div>
        <div className="w-full h-full bg-gray-800/50 z-5 hidden rounded-md group-hover:block absolute top-0 left-0"></div>
        <div className="thumb-img w-full h-full rounded-md">
          <img
            src={thumb}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="info hidden absolute group-hover:flex items-center space-x-5 z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="bg-gray-200/60 block hover:bg-white/100 text-slate-700 font-semibold tracking-[1.5] py-[5px] px-2 rounded-md">
            <a href={link} target="_blank">
              Demo
            </a>
          </div>
          <div className="bg-gray-200/60 hover:bg-white/100 block text-slate-700 font-semibold tracking-[1.5] py-[5px] px-2 rounded-md">
            <a href={github} target="_blank">
              Github
            </a>
          </div>
        </div>
        {user && (
          <Link to={`/admin/project/${id}`}>
            <FiEdit className="absolute top-2 right-2 bg-emerald-500/80 rounded-md cursor-pointer text-white text-xl block w-5 h-5 p-[2px]" />
          </Link>
        )}
      </div>
      <div className="title text-slate-700 font-semibold tracking-[1.5px] text-lg px-1 py-1 truncate">
        {title}
      </div>
    </div>
  );
};
export default ProjectCard;
