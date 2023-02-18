import loading from "../assets/images/loading.svg";
const Loading = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <img src={loading} alt="" />
    </div>
  );
};
export default Loading;
