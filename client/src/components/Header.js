import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header w-full flex items-center justify-center py-3 mb-5">
      <div className="log -mt-5 mr-5">
        <Logo />
      </div>
      <div className="nav flex items-center justify-around text-slate-700 tracikng-[1.5px] font-semibold">
        <div className="hover:text-green-500">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/17NH3HPj4Orw2r0I61yMkQXTOmtnft0h9/view?usp=sharing"
            className="mr-5"
          >
            View my Resume
          </a>
        </div>
        <div>
          <Link to="/admin/createProject">For Admin</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
