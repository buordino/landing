import DeveloperItems from "./DeveloperItems";

export interface DeveloperType {
  img: string;
  name: string;
  job: string;
  caption: string;
}
const developers: DeveloperType[] = [
  {
    img: "/images/no-developer.png",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
    job: "توسعه دهنده front end",
    name: "ناهید ناهیدی",
  },
  {
    img: "/images/no-developer.png",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
    job: "توسعه دهنده front end",
    name: "ناهید ناهیدی",
  },
  {
    img: "/images/no-developer.png",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
    job: "توسعه دهنده front end",
    name: "ناهید ناهیدی",
  },
  {
    img: "/images/no-developer.png",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
    job: "توسعه دهنده front end",
    name: "ناهید ناهیدی",
  },
  {
    img: "/images/no-developer.png",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
    job: "توسعه دهنده front end",
    name: "ناهید ناهیدی",
  },
  {
    img: "/images/no-developer.png",
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
    job: "توسعه دهنده front end",
    name: "ناهید ناهیدی",
  },
];

const DevelopersList = () => {
  return (
    <ul className="flex items-center gap-2 justify-between flex-wrap">
      {developers.map((developer, index) => (
        <DeveloperItems
          key={index + 1}
          developer={developer}
          number={index + 1}
        />
      ))}
    </ul>
  );
};

export default DevelopersList;
