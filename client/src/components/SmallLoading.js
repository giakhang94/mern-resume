import smallLoading from "../assets/images/small-loading.svg";
function SmallLoading() {
  return (
    <div className="flex items-center justify-center">
      <img src={smallLoading} alt="" className="w-[20px] h-[20px] mr-3" />
      <p>Loading</p>
    </div>
  );
}
export default SmallLoading;
