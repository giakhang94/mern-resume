import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <div>
        <p className="tracking-[1.5px] flex items-center mt-5 block">
          <span className="text-slate-800 text-xl font-semibold mr-[3px]">
            My
          </span>
          <span className="bg-emerald-500 py-[3px] text-xl px-2 rounded-md text-white font-bold">
            CV
          </span>
        </p>
      </div>
    </Link>
  );
};
export default Logo;
