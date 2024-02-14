"use client";

import MonthHeader from "./MonthHeader";
import Day from "./Day";
import getDayArray from "../helpers/getDayArray";
import { AnimatePresence, motion } from "framer-motion";
import BlankDays from "./BlankDays";

const Month: React.FC<{ year: number; month: number }> = ({ year, month }) => {
  const array = getDayArray(year, month);

  return (
    <div className="md:w-[50%] w-[90%] flex flex-col items-center justify-start border-2 border-black rounded-md">
      <MonthHeader />
      <div className="w-full flex flex-wrap">
        <AnimatePresence>
          <motion.div></motion.div>
          <BlankDays year={year} month={month} />
          {array?.map((day, i) => {
            return (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.03, bounce: 0 }}
                key={i}
                className="w-[14.2857142857%] aspect-square"
              >
                <Day />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Month;
