import Day from "./Day";

const BlankDays: React.FC<{ year: number; month: number }> = ({
  year,
  month,
}) => {
  const firstDay = new Date(year, month, 1);
  const array = Array(firstDay.getDay()).fill("");

  return (
    <>
      {array.map((day, i) => {
        return <Day key={i} isBlank />;
      })}
    </>
  );
};

export default BlankDays;
