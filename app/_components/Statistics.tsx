interface StatisticsPropsType {
  title: string;
  number: number;
  size: "large" | "small";
}
const Statistics = ({ title, number, size }: StatisticsPropsType) => {
  const width = `${size === "large" ? "w-[120px] sm:w-[140px]" : "w-[70px] sm:w-[90px]"}`;
  return (
    <div
      className={`text-custome-black dark:text-white bg-gradient-to-b to-[#FFFFFF66]/20 from-[#FFFFFF66] backdrop-blur-3xl font-semibold  h-[80px]  ${width} flex flex-col items-center justify-center rounded-[20px] border-2 border-solid border-[#EEEDED80]`}
    >
      <span className="block">
        {number}
        {""}+
      </span>
      <span className="block">{title}</span>
    </div>
  );
};

export default Statistics;
