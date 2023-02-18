import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Info, ProjectCard, SkillSlider } from "../components";
const Home = () => {
  const { allProject, getAllProject } = useAppContext();
  useEffect(() => {
    getAllProject();
  }, []);
  return (
    <div className="home w-screen">
      <div>
        <Info />
      </div>
      <div className="w-full">
        <h2 className="text-center text-xl text-slate-700 font-semibold tracking-[1.5px]">
          My Projects
        </h2>
        <div className="grid place-items-center w-full laptop:grid-cols-3 laptop:place-content-center tablet:grid-cols-2 grid-cols-1 ">
          {allProject &&
            allProject.allProject.map((pj, index) => {
              return (
                <ProjectCard
                  classname="mt-10 mb-10"
                  key={index + "pjCard"}
                  title={pj.title}
                  link={pj.link}
                  github={pj.github}
                  thumb={pj.thumb}
                  id={pj._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Home;
