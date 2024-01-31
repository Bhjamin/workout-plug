import MonthHeader from "./MonthHeader";
import Day from "./Day";

const Month = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start h-24 border-2 border-black rounded-md">
      <MonthHeader />
      <div className="w-full flex flex-wrap"></div>
    </div>
  );
};

export default Month;
