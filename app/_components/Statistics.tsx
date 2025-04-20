interface StatisticsPropsType {
  title: string;
  number: number;
}
const Statistics = ({ title, number }: StatisticsPropsType) => {
  return (
    <div className="text-custome-black">
      <span className="block mb-1">+{number}</span>
      <span className="block">{title}</span>
    </div>
  );
};

export default Statistics;
