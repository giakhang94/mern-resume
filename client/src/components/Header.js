import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { logout, user } = useAppContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="header w-full flex items-center justify-center py-3 mb-5">
      <div className="log -mt-5 mr-5">
        <Logo />
      </div>
      <div className="nav flex items-center justify-around text-slate-700 tracikng-[1.5px] font-semibold">
        <div className="hover:text-green-500">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/14R5En1x5H8eWKd0BME-Fdv6re3ZlaAPg/view?usp=sharing"
            className="mr-5"
          >
            View my Resume
          </a>
        </div>
        <div className="group relative">
          <Link to="/admin/createProject">For Admin</Link>
          {user && (
            <span
              className="bg-red-600 text-white font-semibold tracking-[1.5px] rounded-sm py-[5px] px-2 hover:bg-red-500 hidden group-hover:block absolute top-full z-10 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
