import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Loading, SmallLoading } from "../components";
import { useAppContext } from "../context/appContext";

const EditProject = () => {
  const { id } = useParams();
  const {
    isLoading,
    isCheckingUser,
    showAlert,
    alertText,
    alertType,
    isSubmit,
    getPJById,
    projectById,
    updatePJ,
  } = useAppContext();
  useEffect(() => {
    getPJById(id);
  }, [id]);
  const [input, setInput] = useState({
    link: "",
    title: "",
    github: "",
    thumb: null,
  });
  useEffect(() => {
    projectById &&
      setInput((prev) => ({
        ...prev,
        title: projectById.title,
        link: projectById.link,
        github: projectById.github,
      }));
  }, [projectById]);

  const handleChange = (e) => {
    if (e.target.name !== "thumb") {
      setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      setInput((prev) => ({ ...prev, thumb: e.target.files[0] }));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    updatePJ(
      {
        title: input.title,
        link: input.link,
        github: input.github,
        thumb: input.thumb,
      },
      id
    );
    setInput({ title: "", link: "", github: "", thumb: null });
  };
  if (!isSubmit && isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full mt-10">
      <form
        action=""
        method="POST"
        onSubmit={submitHandler}
        className="w-80% max-w-[500px] mx-auto mt-5 px-5 py-5 shadow-md shadow-gray-500"
      >
        <h2 className="text-slate-700 font-semibold text-xl text-center mb-5">
          EDIT PROJECT
        </h2>
        {showAlert && (
          <Alert alertText={alertText} alertType={alertType} classname="mb-5" />
        )}
        <input
          type="text"
          className="rounded-sm border border-gray-300 w-full block py-2 mb-5 px-2"
          name="title"
          placeholder="Project Title"
          value={input.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="rounded-sm border border-gray-300 w-full block py-2 mb-5 px-2"
          name="link"
          placeholder="Link demo project"
          value={input.link}
          onChange={handleChange}
        />
        <input
          type="text"
          className="rounded-sm border border-gray-300 w-full block py-2 mb-5 px-2"
          name="github"
          placeholder="link github"
          value={input.github}
          onChange={handleChange}
        />
        <input
          type="file"
          className="rounded-sm border border-gray-300 w-full block py-2 mb-5 px-2"
          name="thumb"
          placeholder="Title"
          onChange={handleChange}
        />
        <button className="w-full bg-emerald-600 text-white font-semibold tracking-[1.5px] py-2 rounded-sm mt-2 mb-2 text-md">
          {isSubmit ? <SmallLoading /> : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default EditProject;
