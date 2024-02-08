const getDayArray = (year: number, month: number) => {
  const thirtyOneDays = [0, 2, 4, 6, 7, 9, 11];
  const thirtyDays = [3, 5, 8, 10];

  if (thirtyOneDays.includes(month)) {
    return Array(31).fill("");
  }

  if (thirtyDays.includes(month)) {
    return Array(30).fill("");
  }

  if (month === 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return Array(29).fill("");
    } else {
      return Array(28).fill("");
    }
  }
};

export default getDayArray;
