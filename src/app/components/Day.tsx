import { AnimatePresence, animate } from "framer-motion";

const Day = ({ isBlank = false }) => {
  return (
    <div
      className={`${
        isBlank === false ? "w-full h-full" : "w-[14.2857142857%] aspect-square"
      } border-4 border-black ${
        isBlank ? "bg-opacity-100 bg-[#221E22]" : "bg-white"
      } bg-opacity-10`}
    ></div>
  );
};

export default Day;
