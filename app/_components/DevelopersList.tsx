"use client";
import { useState } from "react";
import DeveloperItems from "./DeveloperItems";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Arrow from "./Arrow";

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
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
    initial: 0,

    created() {
      setLoaded(true);
    },
    slides: {
      perView: 3,
      spacing: 25,
    },
    loop: true,
    breakpoints: {
      "(max-width: 850px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 550px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
  });
  return (
    <div className="navigation-wrapper relative">
      <ul ref={sliderRef} className="keen-slider">
        {developers.map((developer, index) => (
          <DeveloperItems key={index + 1} developer={developer} />
        ))}
      </ul>
      {loaded && instanceRef.current && (
        <>
          <>
            <Arrow left onClick={() => instanceRef.current?.prev()} />

            <Arrow onClick={() => instanceRef.current?.next()} />
          </>
        </>
      )}
    </div>
  );
};

export default DevelopersList;
