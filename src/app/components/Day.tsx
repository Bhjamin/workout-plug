import { AnimatePresence, animate } from "framer-motion";

const Day = ({ isBlank = false, i }) => {
  return (
    <div
      className={`${
        isBlank === false ? "w-full h-full" : "w-[14.2857142857%] aspect-square"
      } border-4 border-black ${
        isBlank
          ? "bg-opacity-100 bg-[#221E22]"
          : "bg-white z-0 bg-opacity-10 hover:bg-opacity-100 hover:z-10 hover:border-[#CA3C25] hover:scale-110 transition-all duration-300"
      }`}
    >
      {i + 1}
    </div>
  );
};

export default Day;
