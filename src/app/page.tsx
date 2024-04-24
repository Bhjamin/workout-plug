import Month from "./components/Month";

const Homepage = () => {
  const currentDate = new Date();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#44355B] to-[#EE5622]">
      <div className="w-full h-auto flex justify-center flex-col items-center sm:flex-row sm:justify-between px-4 py-2 md:px-6 md:py-4">
        <h1 className="font-minecraft text-lg md:text-2xl lg:text-4xl xl:text-5xl">
          The Workout Pluhhh
        </h1>
        <img
          className="w-[48px] h-[48px]"
          src="https://camo.githubusercontent.com/3bcd317876dc122d3055613c7f5450134050d0c5a8683807c6f2e8e2178737b0/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Month
          year={currentDate.getFullYear()}
          month={currentDate.getMonth()}
          date={currentDate}
        />
      </div>
    </div>
  );
};

export default Homepage;
