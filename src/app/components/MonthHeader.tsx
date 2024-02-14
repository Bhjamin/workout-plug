const MonthHeader = () => {
  const days = [
    {
      day: "Sunday",
      color: "text-[#ECA72C]",
    },
    {
      day: "Monday",
      color: "text-[#679436]",
    },
    {
      day: "Tuesday",
      color: "text-[#CA3C25]",
    },
    {
      day: "Wednesday",
      color: "text-[#e08cbf]",
    },
    {
      day: "Thursday",
      color: "text-[#54ac86]",
    },
    {
      day: "Friday",
      color: "text-[#b23ee4]",
    },
    {
      day: "Saturday",
      color: "text-[#22AED1]",
    },
  ];

  return (
    <section className="w-full flex bg-[#221E22] rounded-t py-1">
      {days.map((day) => {
        return (
          <div
            key={day.day}
            className={`w-[14.2857142857%] flex justify-center items-center ${
              day.day !== "Saturday" && "border-r-[1px]"
            }`}
          >
            <p
              className={`font-minecraft hidden md:flex text-xs lg:text-base ${day.color}`}
            >
              {day.day}
            </p>
            <p className={`font-minecraft flex md:hidden ${day.color}`}>
              {day.day[0]}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default MonthHeader;
