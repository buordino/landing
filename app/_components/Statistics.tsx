interface StatisticsPropsType {
  title: string;
  number: number;
  size: "large" | "small";
}
const Statistics = ({ title, number, size }: StatisticsPropsType) => {
    const padding=`${size==="large" ? " px-4" :" px-2"}`
  return (
    <div
      className={`text-custome-black h-[100px] bg-[#FFFFFF05] ${padding} flex flex-col rounded-[20px] border-2 border-solid border-[#EEEDED80]`}
    >
      <span className="block mb-1">
        {number}
        {""}+
      </span>
      <span className="block">{title}</span>
    </div>
  );
};

export default Statistics;
