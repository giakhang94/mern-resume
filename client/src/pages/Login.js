import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { Alert, Logo } from "../components";
const Login = () => {
  const navigate = useNavigate();
  const { user, login, showAlert, alertText, alertType } = useAppContext();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    login({ username: input.username, password: input.password });
  };
  useEffect(() => {
    console.log(user);
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user]);
  return (
    <div className="w-full flex  flex-col items-center">
      <form className="w-[80%] max-w-[350px] px-5 border border-gray-300 rounded-sm h-[350px] flex flex-col items-center mt-5">
        <p className="mt-3 text-lg text-slate-700 font-semibold tracking-[1.5px]">
          Login
        </p>
        <Logo />
        {showAlert && (
          <Alert alertType={alertType} alertText={alertText} classname="mt-3" />
        )}
        <input
          className="p-1 rounded-sm mb-3 border border-gray-300 mt-6 block w-full"
          type="text"
          placeholder="username"
          value={input.username}
          onChange={(e) => {
            setInput((prev) => ({ ...prev, username: e.target.value }));
          }}
        />
        <input
          className="p-1 rounded-sm mb-3 border border-gray-300 block w-full"
          type="password"
          placeholder="password"
          value={input.password}
          onChange={(e) => {
            setInput((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full block bg-emerald-600 mt-5 text-white font-semibold tracking-[1.5px] py-1 rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
