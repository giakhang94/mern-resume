import { useState } from "react";
import FlexibleComponent from "./FlexibleComponent";

const JobInput = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [job, setJob] = useState([]);
  let [jobCount, setJobCount] = useState(1);
  const jobCountArray = Array.from(Array(jobCount).keys());
  const [inputValue, setInputValue] = useState({
    congty0: "ten conng ty cua ban",
    from0: "tu ngay nao toi ngay nao?",
    description0: "mo ta cong ty cua ban",
  });
  console.log(job);
  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div
        onClick={() => {
          setJobCount((prev) => prev + 1);
        }}
      >
        add
      </div>
      {jobCountArray.map((_, index) => {
        return (
          <form action="" className="flex flex-col">
            <span
              className="bg-green-300 text-green-500 px-2 py-1 font-semibold tracking-[1.5px] cursor-pointer"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </span>
            <FlexibleComponent
              tag={isEdit ? "input" : "p"}
              name={`congty${index}`}
              id=""
              placeholder="Congty"
              handleChange={handleChange}
              value={inputValue[`congty${index}`]}
            >
              {inputValue[`congty${index}`] || "nhap ten cong ty"}
            </FlexibleComponent>
            <FlexibleComponent
              type="text"
              tag={isEdit ? "input" : "p"}
              name={`from${index}`}
              id=""
              placeholder="từ ngày - đến ngày"
              handleChange={handleChange}
              value={inputValue[`from${index}`]}
            >
              {inputValue[`from${index}`] || "nhap thoi gian lam viec"}
            </FlexibleComponent>
            <FlexibleComponent
              type="text"
              tag={isEdit ? "textarea" : "p"}
              name={`description${index}`}
              placeholder="mô tả công việc"
              handleChange={handleChange}
              value={inputValue[`description${index}`]}
            >
              {inputValue[`description${index}`] || "mo ta cong viec"}
            </FlexibleComponent>
            <button
              onClick={(E) => {
                E.preventDefault();
                setIsEdit(false);
                // setJob((job) => [
                // //   ...job,
                // //   {
                // //     congty: inputValue[`congty${index}`],
                // //     from: inputValue[`from${index}`],
                // //     description: inputValue[`description${index}`],
                // //   },
                // ]);

                job[index] = {
                  congty: inputValue[`congty${index}`],
                  from: inputValue[`from${index}`],
                  description: inputValue[`description${index}`],
                };
              }}
            >
              save
            </button>
          </form>
        );
      })}
    </>
  );
};
export default JobInput;
