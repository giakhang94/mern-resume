import { useState } from "react";
import FlexibleComponent from "./FlexibleComponent";
import JobInput from "./JobInput";

const CV = () => {
  const [pCount, setPCount] = useState(3);
  const pCountArray = Array.from(Array(pCount).keys());
  const handleAddInfo = () => {
    setPCount((prev) => prev + 1);
  };
  return (
    <div className="w-[80%] max-w-[600px] flex items-start mx-auto">
      <div className="left w-[30%] mr-5">
        <div className="avatar">
          <img src="" alt="" />
        </div>
        <div className="info w-full">
          <span onClick={handleAddInfo}>tao</span>
          {pCountArray.map((p, index) => {
            return (
              <FlexibleComponent
                tag="input"
                placeholder="tao tao"
                key={index}
                classname="block"
              />
            );
          })}
        </div>
      </div>
      <div className="right w-[70%] ml-3">
        <JobInput />
      </div>
    </div>
  );
};
export default CV;
