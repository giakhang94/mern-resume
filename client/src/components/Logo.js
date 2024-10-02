import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <div>
        <p className="tracking-[1.5px] flex items-center mt-5 block">
          <span className="text-slate-800 text-lg font-semibold mr-[3px]">
            My
          </span>
          <span className="bg-emerald-500 py-[3px] text-lg px-2 rounded-md text-white font-bold">
            Portfolio
          </span>
        </p>
      </div>
    </Link>
  );
};
export default Logo;
