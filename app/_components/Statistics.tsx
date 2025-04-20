interface StatisticsPropsType {
  title: string;
  number: number;
  size: "large" | "small";
}
const Statistics = ({ title, number, size }: StatisticsPropsType) => {
  const padding = `${size === "large" ? "w-[140px]" : "w-[90px]"}`;
  return (
    <div
      className={`text-custome-black font-semibold  h-[80px] bg-[#FFFFFF05] ${padding} flex flex-col items-center justify-center rounded-[20px] border-2 border-solid border-[#EEEDED80]`}
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
