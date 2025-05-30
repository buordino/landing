"use client";
import CommentItems from "./CommentItems";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export interface CommentType {
  avatar: string;
  name: string;
  comment: string;
}

const defaultComments: CommentType[] = [
  {
    avatar: "/images/no-avatar.png",
    name: "حانیه بابایی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    avatar: "/images/no-avatar.png",
    name: "حانیه بابایی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    avatar: "/images/no-avatar.png",
    name: "حانیه بابایی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    avatar: "/images/no-avatar.png",
    name: "حانیه بابایی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    avatar: "/images/no-avatar.png",
    name: "حانیه بابایی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    avatar: "/images/no-avatar.png",
    name: "حانیه بابایی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
];

const CommentsList = () => {
  const [sliderRef] = useKeenSlider<HTMLUListElement>({
    slides: {
      perView: 3,
      spacing: 20,
    },
    loop: true,
    breakpoints: {
      "(max-width: 769px)": {
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
    <ul ref={sliderRef} className="keen-slider">
      {defaultComments.map((comment, index) => (
        <CommentItems key={index + 1} commentItems={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
